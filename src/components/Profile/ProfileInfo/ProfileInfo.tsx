import React from 'react'
import s from './ProfileInfo.module.css'
import {ProfileType} from '../../Redux/profile-reducer'
import ProStatus from '../Status/ProStatus'
import {ProfilePreloader} from './ProfileInfoPreloader'
import emptyAva from '../../../assets/empty_avatar.jpg'

type ProfileInfoProps = {
    profile: ProfileType | null
    status: string | null
    setStatus: (status: string) => void
}

export const ProfileInfo = React.memo(({profile, status, setStatus}: ProfileInfoProps) => {

    if (!profile) {
    // if (true) {
        // return <Preloader height={'h150'}/>
        return <ProfilePreloader />
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.profileInfo_ava}>
                <img src={profile.photos.small ? profile.photos.small : emptyAva} alt="ava"/>
            </div>
            <div className={s.profileInfo_name}>
                <span>{profile.fullName}</span>
            </div>
            <ProStatus status={status} setStatus={setStatus}/>
        </div>)
})
