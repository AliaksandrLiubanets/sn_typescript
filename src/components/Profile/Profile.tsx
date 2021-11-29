import React from 'react'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import {ActionsTypes, StateType} from '../Redux/store'
import AddPostContainer from './AddPost/AddPostContainer'

type ProfilePropsType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
}

function Profile(props: ProfilePropsType) {
    return <div className={s.content} >
        <ProfileInfo />
        <AddPostContainer state={props.state} dispatch={props.dispatch}/>
    </div>
}

export default Profile