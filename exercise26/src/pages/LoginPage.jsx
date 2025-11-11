import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation(); // Halkan waxaanu ka helaynaa state-ka 'from'

  // Hadda waa '/login', laakiin 'location.state?.from' waa meesha uu isku dayay inuu aado (tusaale: '/create-post')
  const from = location.state?.from?.pathname || "/"; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      // Haddi login-ku guulaysto, u dir meeshii uu ka yimid
      navigate(from, { replace: true });
    } else {
      setError('Incorrect username or password. Try a valid input.');
    }
  };

  return (
    <div className='flex flex-col items-center mt-10 gap-4'>
      <h2 className='font-bold text-4xl text-red-800'>Login</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6 w-96'>
        {error && <p className='text-red-500'>{error}</p>}
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className='w-full p-2 rounded border outline-0'
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className='w-full p-2 rounded border outline-0'
        />
        <button type="submit" className='w-full p-2 rounded bg-rose-800 text-white outline-0'>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;