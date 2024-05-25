import axios from "axios";
import { PostObject } from "../components/Post/Post"

export const retrievePosts = async () => {
    const response = await axios.get(
        'http://localhost:8000/posts/list',
    );
    return response.data;
};

export const updatePost = async (post: PostObject) => {
    const response = await axios.put(
        `http://localhost:8000/posts/edit/${post.id}/`,
        {
            title: post.title,
            content: post.content,
        }
    );
    return response.data;
}