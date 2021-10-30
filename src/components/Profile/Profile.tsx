import React from "react";
import s from './Profile.module.css'
import AddPost from './AddPost/AddPost'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from '../Redux/state'

type profileStateType = {
    messagesData: Array<PostType>
}

type ProfilePropsType = {
    profileState: profileStateType
}

function Profile(props: ProfilePropsType) {
    return <div className={s.content} >
        <ProfileInfo />
        <AddPost massagesData={props.profileState.messagesData}/>
    </div>
}

export default Profile