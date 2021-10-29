import React from "react";
import Posts from "./Posts/Posts";
import s from './AddPost.module.css'
import {v1} from 'uuid'

export type PostElementType = {
    id: string
    message: string
    likes: number
}

function AddPost() {

    const massagesData:Array<PostElementType> = [
        {id: v1(), message: 'hello!', likes: 3},
        {id: v1(), message: 'Hi!', likes: 5},
        {id: v1(), message: 'How is it going?!', likes: 8}
    ]

    return <div className={s.addPost}>
        <div>My posts:</div>
        <textarea placeholder='Type message...'></textarea>
        <button>Add post</button>
        {massagesData.map((el: PostElementType) => <Posts key={el.id} post={el.message} likes={el.likes}/>)}
        {/*<Posts post={'hello!'} likes={3}/>*/}
        {/*<Posts post={'Hi!'} likes={5}/>*/}
        {/*<Posts post={'How is it going?'} likes={10}/>*/}
    </div>
}

export default AddPost