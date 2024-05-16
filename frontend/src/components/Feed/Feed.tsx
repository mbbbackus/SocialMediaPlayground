import './Feed.css';
import React from 'react';

import { Post, PostObject} from "../Post/Post";

type FeedProps = {
    posts: PostObject[]
}

export function Feed(props: FeedProps) {
    return props.posts?.map((post: PostObject) => <Post key={post.id} post={post} />)
}

export default Feed;
