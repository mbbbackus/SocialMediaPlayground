import "./App.css";
// import React from 'react';
import { useQuery } from "@tanstack/react-query";

import { Feed } from "./components/Feed/Feed";
import { retrievePosts } from "./queries/Posts";

function App() {

    const queryKey = ["queryPosts"];
    const queryFn = retrievePosts;
    const queryParams = { queryKey, queryFn };
	const { data, error, isLoading } = useQuery(queryParams);
	
    if (isLoading) return <div>Fetching posts...</div>;
	if (error) return <div>An error occurred: {error.message}</div>;
    
	return (
        <div className="App">
            <Feed posts={data} />
        </div>
    );
}

export default App;