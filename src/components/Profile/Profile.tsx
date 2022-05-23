import React, {FC} from 'react'
import s from './Profile.module.css'
import {ProfileType} from '../Redux/profile-reducer'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {Avatar} from './ProfileInfo/Avatar/Avatar'

type ProfileProps = {
    profile: ProfileType | null
    status: string | null
    setStatus: (status: string) => void
    isLoading: boolean
    uploadPhoto: (photo: File) => void
    isOwner: boolean
}

export const Profile: FC<ProfileProps> = (props) => {
    return <div className={s.profile}>
        <div className={s.page_block}>
            <Avatar ava={props.profile && props.profile.photos.small}
                    uploadPhoto={props.uploadPhoto}
                    isOwner={props.isOwner}
                    isLoading={props.isLoading}
            />
        </div>
        <ProfileInfo {...props}/>
    </div>
}



