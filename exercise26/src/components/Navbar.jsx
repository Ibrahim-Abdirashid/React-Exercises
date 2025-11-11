import React from 'react';
import { Link } from 'react-router';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className=' flex justify-between p-5 bg-indigo-500 items-center'>
      <div className='flex  gap-3.5 '>
        <Link to="/" className='text-rose-800 bg-white p-1 rounded font-bold '>Home</Link>
        {isAuthenticated && (
          <Link to="/create-post" className='text-rose-800 bg-white p-1 rounded font-bold '>Create Post</Link>
        )}
      </div>
      <div className=' bg-white p-3 rounded font-bold space-x-2 '>
        {isAuthenticated ? (
          <>
            <span className='text-rose-500'>Hello, {user.username}</span>
            <button onClick={handleLogout} className='text-white bg-indigo-800 p-1 rounded'>Logout</button>
          </>
        ) : (
          <Link to="/login" className='text-rose-500'>Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;