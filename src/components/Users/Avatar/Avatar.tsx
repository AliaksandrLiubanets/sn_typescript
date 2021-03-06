import s from '../Users.module.css'
import d from './Avatar.module.css'
import emptyAva from '../../../assets/empty_avatar.jpg'
import {NavLink} from 'react-router-dom'
import React, {FC} from 'react'
import {Preloader} from '../../common/Preloader/Preloader'
import {PATH} from '../../../enums/path'

type AvatarPropsType = {
    id: number
    photos: {
        small: string | null
        large: string | null
    }
    followingProgress: boolean
}

export const Avatar: FC<AvatarPropsType> = React.memo(({id, photos, followingProgress}) => {

    const avaStyle: string = followingProgress ? `${d.disable}` : `${d.user__ava}`

    return <>
        <NavLink to={followingProgress ? '#' : `${PATH.PROFILE}/${id}`}>
            <div>
                <img className={avaStyle} src={photos.small ? photos.small : emptyAva} alt="ava"/>
            </div>
        </NavLink>
        {
            followingProgress
            && <div className={s.user_preloader}>
                <Preloader/>
            </div>
        }
    </>
})

