import React, { useState, useMemo } from 'react';

const HomePage = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Ku kala sifee posts-ka adoo isticmaalaya useMemo
  const filteredPosts = useMemo(() => {
    if (!searchTerm) {
      return posts;
    }
    const lowerCaseSearch = searchTerm.toLowerCase();
    return posts.filter(post => 
      post.title.toLowerCase().includes(lowerCaseSearch) ||
      post.content.toLowerCase().includes(lowerCaseSearch)
    );
  }, [posts, searchTerm]);

  return (
    <div className='flex flex-col max-w-6xl ml-auto mr-auto p-5 items-center gap-5 '>
      <h2 className='text-indigo-800 font-black text-4xl'>Blog Posts</h2>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='w-full p-2 rounded border outline-0'
        
      />
      
      {filteredPosts.length > 0 ? (
        <div className='grid grid-cols-3 gap-5'>
          {filteredPosts.map(post => (
            <div key={post.id} className='bg-white p-5 rounded shadow'>
              <h3 className='text-2xl font-bold text-indigo-800'>{post.title}</h3>
              <p className='text-rose-500'>by **{post.author}**</p>
              <p className='text-gray-700'>{post.content.substring(0, 150)}...</p> 
            </div>
          ))}
        </div>
      ) : (
        <p>Ma jiraan posts la waafajiyay raadintaada.</p>
      )}
    </div>
  );
};

export default HomePage;