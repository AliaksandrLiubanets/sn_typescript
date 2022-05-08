import React, {ChangeEvent, useRef} from 'react'
import s from './ProfileInfo.module.css'
import {ProfileType, uploadPhoto} from '../../Redux/profile-reducer'
import ProStatus from '../Status/ProStatus'
import emptyAva from '../../../assets/empty_avatar.jpg'
import {Spinner} from '../../common/Spinner/Spinner'
import {useDispatch} from 'react-redux'

type ProfileInfoProps = {
    profile: ProfileType | null
    status: string | null
    setStatus: (status: string) => void
    isLoading: boolean
}

export const ProfileInfo = React.memo(({profile, status, setStatus, isLoading}: ProfileInfoProps) => {

    const inRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch()
    const ava = profile && profile.photos.small

    if(isLoading) {
        return <Spinner />
    }

    const upload = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            dispatch(uploadPhoto(e.target.files[0]))
        }
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.profileInfo_ava}>
                <input
                    ref={inRef}
                    type={'file'}
                    style={{display: 'none'}}
                    onChange={upload}
                />
                <img className={s.avatar}
                     onClick={() => inRef && inRef.current && inRef.current.click()}
                     src={ava ? ava : emptyAva}
                     alt="ava"
                />
            </div>
            <div className={s.profileInfo_name}>
                <span>{profile && profile.fullName}</span>
            </div>
            <ProStatus status={status} setStatus={setStatus}/>
        </div>)
})
