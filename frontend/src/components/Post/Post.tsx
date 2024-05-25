import './Post.css';
import React, { useState } from "react";
import { Title } from './Title/Title';

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

    const [post, setPost] = useState(props.post);

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
        <div className="post">
            {/* <p className="post-title">{props.post.title}</p> */}
            <Title post={post} setPost={setPost}/>
            <p className="post-date">{formattedDate} ({formattedTime})</p>
            <p className="post-content">{props.post.content}</p>
        </div>
    );
}

