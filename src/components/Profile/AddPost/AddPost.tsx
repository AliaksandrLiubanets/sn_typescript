import React from "react";
import Posts from "./Posts/Posts";
import s from './AddPost.module.css'
import {PostType} from '../../../index'


type AddPostPropsType = {
    massagesData: Array<PostType>
}

function AddPost(props: AddPostPropsType) {

    return <div className={s.addPost}>
        <div>My posts:</div>
        <textarea placeholder='Type message...'></textarea>
        <button>Add post</button>
        {props.massagesData.map((el: PostType) => <Posts key={el.id} post={el.message} likes={el.likes}/>)}
    </div>
}

export default AddPost