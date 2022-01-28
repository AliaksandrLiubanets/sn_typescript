import React, {FC} from 'react'
import s from './Profile.module.css'
import AddPostContainer from './AddPost/AddPostContainer'
import {ProfileType} from '../Redux/profile-reducer'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'

type ProfileProps = {
    profile: ProfileType | null
}

export const Profile: FC<ProfileProps> =(props) => {
    return <div className={s.content}>
        <ProfileInfo {...props}/>
        <AddPostContainer/>
    </div>
}



