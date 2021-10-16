import React from "react";
import Posts from "./Posts/Posts";
import s from './AddPost.module.css'

function AddPost() {
    return <div className={s.addPost}>
        <div>Add post:</div>
        <textarea></textarea>
        <Posts post={'hello!'} likes={3}/>
        <Posts post={'Hi!'} likes={5}/>
        <Posts post={'How is it going?'} likes={10}/>
    </div>
}

export default AddPost