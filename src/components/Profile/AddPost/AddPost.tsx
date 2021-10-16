import React from "react";
import Posts from "./Posts/Posts";
import s from './AddPost.module.css'

function AddPost() {
    return <div className={s.addPost}>
        <div>Add post:</div>
        <textarea>Add text</textarea>
        <Posts />
    </div>
}

export default AddPost