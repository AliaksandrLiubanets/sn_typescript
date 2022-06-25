import React, {FC} from 'react'
import s from '../../Dialogs/TextareaField.module.css'
import emptyAvatar from '../../../assets/empty_avatar.jpg'

type AvatarType = {
    url: string | null
}

export const Avatar: FC<AvatarType> = ({url}) => {
    return <div className={s.message_post_ava}>
        <img src={url ? url : emptyAvatar} alt='avatar'/>
    </div>
}