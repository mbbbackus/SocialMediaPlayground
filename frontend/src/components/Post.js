import './Post.css';
import React from 'react';

function Post({title, content, created_at}) {
  return (
    <div>
        <h3>{title}</h3>
        <p>{created_at}</p>
        <p>{content}</p>
    </div>
  );
}

export default Post;
