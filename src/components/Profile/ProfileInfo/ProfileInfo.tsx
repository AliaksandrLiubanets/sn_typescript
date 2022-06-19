import React from 'react'
import s from './ProfileInfo.module.css'
import p from '../../Profile/Profile.module.css'
import {profileActions, ProfileType} from '../../Redux/profile-reducer'
import {Spinner} from '../../common/Spinner/Spinner'
import {NameStatus} from '../NameStatus/NameStatus'
import {Contacts} from './Contacts/Contacts'
import {AddPost} from '../AddPost/AddPost'
import {useDispatch, useSelector} from 'react-redux'
import {profileSelector} from '../../../selectors/selectors'

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
                                           isOwner,
                                       }: ProfileInfoProps) => {

    const dispatch = useDispatch()
    const {textareaCurrentValue, messagesData } = useSelector(profileSelector)
    const setCurrentText = (text: string) => dispatch(profileActions.addCurrentValue(text))
    const addMessage = () => dispatch(profileActions.addPost())


    if (isLoading) {
      return <Spinner/>
    }

    return (
        <div className={s.profileInfo}>
            <div className={p.page_block}>
                <NameStatus name={profile && profile.fullName}
                            status={status}
                            setStatus={setStatus}
                            isOwner={isOwner}
                />
                <Contacts profile={profile} isOwner={isOwner}/>
            </div>
            <div className={p.page_block}>
                <AddPost setCurrentText={setCurrentText}
                         messagesData={messagesData}
                         addPost={addMessage}
                         value={textareaCurrentValue}
                         avatar={profile ? profile.photos.small : ''}
                />
            </div>
        </div>
    )
})
