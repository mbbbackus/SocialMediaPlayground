import './Post.css';
import React from 'react';

function Post({post}) {
  return (
    <div>
        <h3>{post.title}</h3>
        <p>{post.created_at}</p>
        <p>{post.content}</p>
    </div>
  );
}

export default Post;
