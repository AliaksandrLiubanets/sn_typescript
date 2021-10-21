import React from "react";
import s from './Profile.module.css'
import AddPost from "./AddPost/AddPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
    return <div className={s.content} >
        <ProfileInfo />
        <AddPost />
    </div>
}

export default Profile