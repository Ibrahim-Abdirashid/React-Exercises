
import { useState } from 'react';

function App(){

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    isChecked: false,
    gender: ''
  })

  const handleFormSubmit = (e)=>{
    e.preventDefault();

    console.log(formData);
    
  }
  const handleChange =(e)=>{
    const { name, value, type , checked } = e.target;
  setFormData((prevData) => ({ ...prevData, [name]: type === 'checkbox' ? checked : value }));

  console.log(formData);
  }
  
  return (
  <div>
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="username" value={formData.username} onChange={handleChange}/>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <input type="password" name="password" value={formData.password} placeholder='password' onChange={handleChange}/>
      <input type="checkbox" name='isChecked'  checked={formData.isChecked} onChange={handleChange} />

      <select value={formData.gender} name='gender' onChange={handleChange} >   
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  </div>
  ) 
}
export default App
