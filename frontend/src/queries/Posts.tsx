import axios from "axios";

export const retrievePosts = async () => {
    const response = await axios.get(
        'http://localhost:8000/posts/list',
    );
    return response.data;
};