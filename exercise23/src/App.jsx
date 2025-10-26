import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    role: "",
    experience: "",
    skills: [],
    agreeToTerms: false,
    notification: false,
  });

  const [errors, setErros] = useState({});

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Product Manager",
  ];

  const skillOptions = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "UI Design",
    "API Development",
  ];
  const falidateFeild = (name, value)=>{
    let error = "";

    if (name === 'fullName') {
      if (!value.trim()) {
        error = "waa inaad gelisaa magacaagoo saddexan";
      } else if (!/^[a-zA-Z\s]{2,30}$/.test(value)) {
        error = "Please magac sax ah geli (2-20 characters, letters only)";
      }
    }

     if (name === 'email') {
      if (!value) {
        error = "waa khasab inaad email galiso";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "fadlan email shaqeynaya geli";
      }
    }

    if (name === 'role') {
      if (!value) {
        error = "fadlan dooro role-kaaga";
      }
    }

     if (name === 'experience') {
      if (!value) {
        error = "waa khasab inaad muddada khibradaada galiso";
      } else if (isNaN(value) || value < 0 || value > 50) {
        error = "fadlan geli inta sanno ee khibrad leedahay (0-20)";
      }
    }

    if (name === 'skills') {
      if (!value || value.length === 0) {
        error = "fadlan ugu yaraan hal xirfad dooro";
      }
    }

    if (name === 'agreeToTerms') {
      if (!value) {
        error = "waa khasab inaad aqbasho";
      }
    }
    
    return error;

  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setForm(prev => ({
      ...prev,
      [name]: newValue
    }));


     const error = falidateFeild(name, newValue);
    setErros(prev => ({
      ...prev,
      [name]: error
    }));
  };
    
   const handleSkillChange = (skill) => {
    const newSkills = form.skills.includes(skill)
      ? form.skills.filter(s => s !== skill)
      : [...form.skills, skill];
    
    setForm(prev => ({
      ...prev,
      skills: newSkills
    }));


      // Validate skills immediately
    const error = falidateFeild('skills', newSkills);
    setErros(prev => ({
      ...prev,
      skills: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const formErrors = {};
    Object.keys(form).forEach(key => {
      const error = falidateFeild(key, form[key]);
      if (error) {
        formErrors[key] = error;
      }
    });

    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', form);
      // Handle successful submission
    } else {
      setErros(formErrors);
    }
  };


  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className='max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 ring-1 ring-zinc-900/5"'>
        <h2 className="text-2xl font-semibold text-zinc-900 mb-8 text-center">
          developer Application form
        </h2>
        {/* form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* name */}
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              placeholder="your name"
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border ${
                errors.fullName
                  ? 'border-red-300 ring-red-500'
                  : 'border-zinc-300 ring-blue-500'
              } px-3 py-2 text-sm focus:outline-none focus:ring-2`}
            />
            {errors.fullName && (
              <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>
            )}
          </div>
          {/* email */}
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Your Email"
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border ${
                errors.email
                  ? 'border-red-300 ring-red-500'
                  : 'border-zinc-300 ring-blue-500'
              } px-3 py-2 text-sm focus:outline-none focus:ring-2`}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          {/* select */}
             <div>
            <label className="block text-sm font-medium text-zinc-700">
              Role
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border ${
                errors.role
                  ? 'border-red-300 ring-red-500'
                  : 'border-zinc-300 ring-blue-500'
              } px-3 py-2 text-sm focus:outline-none focus:ring-2`}
            >
              <option value="">Select a role</option>
              {roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
            {errors.role && (
              <p className="mt-2 text-sm text-red-600">{errors.role}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Years of Experience
            </label>
            <input
              type="number"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              min="0"
              max="50"
              className={`mt-1 block w-full rounded-lg border ${
                errors.experience
                  ? 'border-red-300 ring-red-500'
                  : 'border-zinc-300 ring-blue-500'
              } px-3 py-2 text-sm focus:outline-none focus:ring-2`}
            />
            {errors.experience && (
              <p className="mt-2 text-sm text-red-600">{errors.experience}</p>
            )}
          </div>

           <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Skills
            </label>
            <div className="grid grid-cols-2 gap-4">
              {skillOptions.map(skill => (
                <label key={skill} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={form.skills.includes(skill)}
                    onChange={() => handleSkillChange(skill)}
                    className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-zinc-600">{skill}</span>
                </label>
              ))}
            </div>
            {errors.skills && (
              <p className="mt-2 text-sm text-red-600">{errors.skills}</p>
            )}
          </div>
           {/* Terms Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={form.agreeToTerms}
              onChange={handleChange}
              className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
            />
            <label className="text-sm text-zinc-700">
              I agree to the terms and conditions
            </label>
          </div>
          {errors.agreeToTerms && (
            <p className="mt-2 text-sm text-red-600">{errors.agreeToTerms}</p>
          )}

          {/* Notifications Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="notifications"
              checked={form.notifications}
              onChange={handleChange}
              className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
            />
            <label className="text-sm text-zinc-700">
              Receive notifications about new opportunities
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
