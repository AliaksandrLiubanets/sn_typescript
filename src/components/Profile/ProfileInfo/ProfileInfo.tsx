import React from 'react'
import s from './ProfileInfo.module.css'
import {ProfileType} from '../../Redux/profile-reducer'
import ProStatus from '../Status/ProStatus'
import emptyAva from '../../../assets/empty_avatar.jpg'
import {Spinner} from '../../common/Spinner/Spinner'

type ProfileInfoProps = {
    profile: ProfileType | null
    status: string | null
    setStatus: (status: string) => void
    isLoading: boolean
}

export const ProfileInfo = React.memo(({profile, status, setStatus, isLoading}: ProfileInfoProps) => {

    if(isLoading) {
        return <Spinner />
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.profileInfo_ava}>
                <img src={profile && profile.photos.small ? profile.photos.small : emptyAva} alt="ava"/>
            </div>
            <div className={s.profileInfo_name}>
                <span>{profile && profile.fullName}</span>
            </div>
            <ProStatus status={status} setStatus={setStatus}/>
        </div>)
})
