import React from 'react'
import s from './ProfileInfo.module.css'
import {ProfileType} from '../../Redux/profile-reducer'
import {Spinner} from '../../common/Spinner/Spinner'
import {NameStatus} from '../NameStatus/NameStatus'
import {Avatar} from './Avatar/Avatar'

type ProfileInfoProps = {
    profile: ProfileType | null
    status: string | null
    setStatus: (status: string) => void
    isLoading: boolean
    uploadPhoto: (photo: File) => void
    isOwner: boolean
}

export const ProfileInfo = React.memo(({
                                           profile,
                                           status,
                                           setStatus,
                                           isLoading,
                                           uploadPhoto,
                                           isOwner
                                       }: ProfileInfoProps) => {

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div className={s.profileInfo}>
            <Avatar ava={profile && profile.photos.small} uploadPhoto={uploadPhoto} isOwner={isOwner}/>
            <NameStatus name={profile && profile.fullName} status={status} setStatus={setStatus}/>
        </div>
    )
})
