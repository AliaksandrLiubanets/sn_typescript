import React from 'react'
import s from './Profile.module.css'
import AddPost from './AddPost/AddPost'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import {ActionsTypes, StateType} from '../Redux/store'

type ProfilePropsType = {
    state: StateType
    // addPostText: () => void
    // setCurrentTextValue: (text: string) => void
    dispatch: (action: ActionsTypes) => void

}

function Profile(props: ProfilePropsType) {
    return <div className={s.content} >
        <ProfileInfo />
        <AddPost state={props.state} dispatch={props.dispatch}/>
    </div>
}

export default Profile