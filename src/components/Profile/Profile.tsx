import React from "react";
import s from './Profile.module.css'
import AddPost from './AddPost/AddPost'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from '../../index'

type ProfilePropsType = {
    messagesData: Array<PostType>
}

function Profile(props: ProfilePropsType) {
    return <div className={s.content} >
        <ProfileInfo />
        <AddPost massagesData={props.messagesData}/>
    </div>
}

export default Profile