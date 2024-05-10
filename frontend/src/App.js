import './App.css';
import React, { useState, useEffect } from 'react';
import Post from './components/Post';

function App() {

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch('http://localhost:8000/posts/list')
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error getting posts:', error);
      return null;
    }

  };

  const updatePosts = async () => {
    const postList = await getPosts();
    if (!postList) return;
    const posts = [];
    for (let i = 0; i < postList.length; i++) {
      const post = postList[i];
      posts.push(
        <Post title={post.title} content={post.content} />
      )
    }
    setPosts(posts);
  }

  useEffect(() => {
    updatePosts();
  })

  return (
    <div className="App">
      {posts}
    </div>
  );
}

export default App;
