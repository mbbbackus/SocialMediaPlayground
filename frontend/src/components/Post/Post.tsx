import './Post.css';
import React from 'react';

export type PostObject = {
    id: string;
    title: string;
    content: string;
    created_at: string;
}

type PostProps = {
    post: PostObject
}

export function Post(props: PostProps) {

    const date = new Date(props.post.created_at);

    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      const formattedTime = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
      });

    return (
        <div>
            <h3>{props.post.title}</h3>
            <p>{formattedDate} ({formattedTime})</p>
            <p>{props.post.content}</p>
        </div>
    );
}

export default Post;
