import React from "react";
import samurai_background from '../../assets/samurai_background.jpg'
import s from './Profile.module.css'

function Profile() {
    return <div className={s.content} >
        <img src={samurai_background} alt="picture"/>
        <div>Add post</div>
        Add post
    </div>
}

export default Profile