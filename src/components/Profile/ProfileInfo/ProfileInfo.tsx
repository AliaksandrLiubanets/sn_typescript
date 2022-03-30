import React from 'react'
import s from './ProfileInfo.module.css'
import {ProfileType} from '../../Redux/profile-reducer'
import {Preloader} from '../../common/Preloader/Preloader'
import ProStatus from '../Status/ProStatus'

type ProfileInfoProps = {
    profile: ProfileType | null
    status: string | null
    setStatus: (status: string) => void
}

export const ProfileInfo = React.memo(({profile, status, setStatus}: ProfileInfoProps) => {

    if (!profile) {
        return <Preloader />
    }

    return <div className={s.profileInfo}>
        <div className={s.profileInfo_ava}>
            <img src={profile.photos.small } alt="ava"/>
        </div>
        <div className={s.profileInfo_name}>
            <span>{profile.fullName}</span>
        </div>
        <ProStatus status={status} setStatus={setStatus}/>
    </div>
})
