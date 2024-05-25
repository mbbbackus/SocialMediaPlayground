import './Title.css';
import React, { useState } from "react";
import { PostObject } from "../Post";
import { Editable } from "../../Editable/Editable"
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updatePost } from "../../../queries/Posts";

type TitleProps = {
    post: PostObject;
    setPost: any;
}

export function Title(props: TitleProps) {

    const queryClient = useQueryClient();
    const changePost = useMutation({
        mutationFn: updatePost
    });

    const editCallback = (text: string) => {
        props.setPost({...props.post, title: text})
        changePost.mutate({...props.post, title: text})
    }
    
    return (
        <Editable
            text={props.post.title}
            placeholder="Write a title name"
            type="input"
            editCallback={editCallback}
        >
            <input
                type="text"
                name="title"
                placeholder="Write a title name"
                value={props.post.title}
                onChange={e => editCallback(e.target.value)}
            />
        </Editable>
    );
}

