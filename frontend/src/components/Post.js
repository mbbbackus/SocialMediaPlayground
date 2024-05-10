import './Post.css';
import React, { useState, useEffect } from 'react';

function Post({title, content}) {
  return (
    <div>
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  );
}

export default Post;
