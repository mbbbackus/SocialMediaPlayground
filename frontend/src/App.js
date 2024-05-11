import './App.css';
// import React from 'react';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Post from './components/Post';

const retrievePosts = async () => {
  const response = await axios.get(
    'http://localhost:8000/posts/list',
  );
  return response.data;
};

function App() {

  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["queryPosts"],
    queryFn: retrievePosts
  });

  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;


  const makePostComponents = (posts) => {
    return posts.map(post => 
      <Post 
        key={post.id} 
        title={post.title} 
        content={post.content}
        created_at={post.created_at}
      />
    )
  }


  return (
    <div className="App">
      {makePostComponents(posts)}
    </div>
  );
}

export default App;
