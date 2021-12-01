import React from 'react'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import AddPostContainer from './AddPost/AddPostContainer'
import {Store} from 'redux'

type ProfilePropsType = {

}

function Profile(props: ProfilePropsType) {

    return <div className={s.content} >
        <ProfileInfo />
        <AddPostContainer />
    </div>
}

export default Profile