import React from "react";
import s from './Profile.module.css'
import AddPost from './AddPost/AddPost'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType, StateType} from '../Redux/state'

type profileStateType = {
    messagesData: Array<PostType>
    addPostText: () => void
    setCurrentTextValue: (text:string) => void
}

type ProfilePropsType = {
    state: StateType
    addPostText: () => void
    setCurrentTextValue: (text: string) => void

}

function Profile(props: ProfilePropsType) {
    return <div className={s.content} >
        <ProfileInfo />
        <AddPost state={props.state} addPostText={props.addPostText} setCurrentTextValue={props.setCurrentTextValue}/>
    </div>
}

export default Profile