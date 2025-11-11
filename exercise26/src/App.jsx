import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { initialPosts } from './data/mockPosts';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CreatePostPage from './pages/CreatePostPage';

const App = () => {
  // Waxaanu halkan ku haynaa posts-ka si aan u kaydino posts-ka cusub
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (newPost) => {
    // Ku dar post-ka cusub kuwa jira
    setPosts(prevPosts => [newPost, ...prevPosts]); 
  };
  
  return (
    <Router>
      <AuthProvider> 
        {/* AuthProvider-ka ayaa ku wareegsan dhamaan si loo isticmaalo useAuth */}
        
        <Navbar />
        
        <Routes>
          {/* 1. Home Page - Muujinaya posts-ka */}
          <Route path="/" element={<HomePage posts={posts} />} />
          
          {/* 2. Login Page */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* 3. Create Post - Waa Protected Route */}
          <Route 
            path="/create-post" 
            element={
              <ProtectedRoute>
                <CreatePostPage addPost={addPost} />
              </ProtectedRoute>
            } 
          />
          
          {/* 4. Page-ka 404 (optional) */}
          <Route path="*" element={<h1>404 - Boggan lama helin</h1>} />

        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;