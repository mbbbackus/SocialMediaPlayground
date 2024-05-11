import "./App.css";
// import React from 'react';
import { useQuery } from "@tanstack/react-query";

import Post from "./components/Post";
import { retrievePosts } from "./queries/Posts";

function App() {
	const {
		data: posts,
		error,
		isLoading,
	} = useQuery({
		queryKey: ["queryPosts"],
		queryFn: retrievePosts,
	});

	if (isLoading) return <div>Fetching posts...</div>;
	if (error) return <div>An error occurred: {error.message}</div>;

	return (
        <div className="App">
            {posts.map((post) => <Post key={post.id} post={post} />)}
        </div>
    );
}

export default App;