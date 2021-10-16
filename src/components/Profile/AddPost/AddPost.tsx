import React from "react";
import Posts from "./Posts/Posts";
import s from './AddPost.module.css'

function AddPost() {
    return <div className={s.addPost}>
        <div>Add post:</div>
        <textarea>Add text</textarea>
        <Posts post={'hello!'}/>
        <Posts post={'Hi!'}/>
        <Posts post={'How is it going?'}/>
    </div>
}

export default AddPost