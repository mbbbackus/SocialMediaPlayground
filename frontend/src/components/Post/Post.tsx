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
  return (
    <div>
        <h3>{props.post.title}</h3>
        <p>{props.post.created_at}</p>
        <p>{props.post.content}</p>
    </div>
  );
}

export default Post;
