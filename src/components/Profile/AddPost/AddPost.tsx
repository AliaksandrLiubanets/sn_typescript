import React from "react";
import Posts from "./Posts/Posts";
import s from './AddPost.module.css'
import {v1} from 'uuid'

export type PostType = {
    id: string
    message: string
    likes: number
}

function AddPost() {

    const massagesData:Array<PostType> = [
        {id: v1(), message: 'hello!', likes: 3},
        {id: v1(), message: 'Hi!', likes: 5},
        {id: v1(), message: 'How is it going?!', likes: 8}
    ]

    return <div className={s.addPost}>
        <div>My posts:</div>
        <textarea placeholder='Type message...'></textarea>
        <button>Add post</button>
        {massagesData.map((el: PostType) => <Posts key={el.id} post={el.message} likes={el.likes}/>)}
    </div>
}

export default AddPost