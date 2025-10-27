import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Student Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* username */}
        <div>
          <label className="block text-sm font-medium mb-1">Student Name</label>
          <input type="text" 
          className="w-full p-2 border rounded" 
          {...register("username", {required: "Username is required" , minLength : {value :3, message : "Username must be at least 3 characters long" } } )}
          />
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
        </div>
        {/* email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email"
           className="w-full p-2 border rounded"
           {...register("email", {required:"email is required", pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format"}})} 
           />
           {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        {/* selection */}
        <div>
          <label className="block text-sm font-medium mb-1">Grade Level</label>
          <select name="" id="" className="w-full p-2 border rounded"
          {...register("grade", {required: "please a select grade"})}
          >
            <option value="">Select grade</option>
            <option value="9">grade 9</option>
            <option value="10">grade 10</option>
            <option value="11">grade 11</option>
            <option value="12">grade 12</option>
          </select>
          {errors.grade && <p className="text-red-500 text-sm mt-1">{errors.grade.message}</p>}
        </div>

        {/* checkbox */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Subjects Interest
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("subjects", {
                  required: "Select at least one subject",
                })}
                value="math"
                className="mr-2"
              />
              Mathematics
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("subjects")}
                value="science"
                className="mr-2"
              />
              Science
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("subjects")}
                value="english"
                className="mr-2"
              />
              English
            </label>
          </div>
          {errors.subjects && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subjects.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default App;
