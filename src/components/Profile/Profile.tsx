import React from "react";
import samurai_background from '../../assets/samurai_background.jpg'
import s from './Profile.module.css'
import AddPost from "./AddPost/AddPost";

function Profile() {
    return <div className={s.content} >
        <img src={samurai_background} alt="picture"/>
        <AddPost />
        Add post
    </div>
}

export default Profile