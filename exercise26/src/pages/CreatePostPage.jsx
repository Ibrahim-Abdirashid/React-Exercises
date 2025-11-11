import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

// Isticmaal PostContext dhab ah si aad posts-ka u kaydiso
const CreatePostPage = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { user } = useAuth(); // Waxaan helaynaa qofkii qoray post-ka

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
        alert("Fadlan abuur post, lama ogola meel madhan inaad create dhahdo");
        return;
    }
    
    // U dir post-ka cusub component-ka App.jsx
    const newPost = {
      id: Date.now(), // ID u gaar ah
      title,
      content,
      author: user.username, // Qofka soo galay
    };

    addPost(newPost);
    
    setTitle('');
    setContent('');
    alert('Post si guul ah ayaa loo abuuray!');
    navigate('/'); // U dir bogga Home-ka
  };

  return (
    <div className='flex flex-col items-center gap-5 mt-10'>
      <h2 className='text-indigo-800 font-black text-4xl'>Create New Post</h2>
      <form onSubmit={handleSubmit} className='flex flex-col items-start w-96 gap-5'>
        <input 
          type="text" 
          placeholder="Post Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className='w-full p-2 rounded border outline-0'
         
        />
        <textarea 
          placeholder="Post Content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          rows="10"
          className='w-full p-2 rounded border outline-0'
        />
        <button type="submit" className='w-full p-2 rounded bg-indigo-800 text-white'>Create Post</button>
      </form>
    </div>
  );
};

export default CreatePostPage;