import React from 'react'
import s from './ProfileInfo.module.css'
import p from '../../Profile/Profile.module.css'
import {ProfileType} from '../../Redux/profile-reducer'
import {Spinner} from '../../common/Spinner/Spinner'
import {NameStatus} from '../NameStatus/NameStatus'
import AddPostContainer from '../AddPost/AddPostContainer'
import {Contacts} from './Contacts/Contacts'

type ProfileInfoProps = {
    profile: ProfileType | null
    status: string | null
    setStatus: (status: string) => void
    isLoading: boolean
    isOwner: boolean
}

export const ProfileInfo = React.memo(({
                                           profile,
                                           status,
                                           setStatus,
                                           isLoading,
                                           isOwner
                                       }: ProfileInfoProps) => {

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div className={s.profileInfo}>
            <div className={p.page_block}>
                <NameStatus name={profile && profile.fullName}
                            status={status}
                            setStatus={setStatus}
                />
                <Contacts profile={profile} isOwner={isOwner}/>
            </div>
            <div className={p.page_block}>
                <AddPostContainer/>
            </div>
        </div>
    )
})
