import React, {ChangeEvent, useRef} from 'react'
import s from './Avatar.module.css'
import emptyAva from '../../../../assets/empty_avatar.jpg'
import {Spinner} from '../../../common/Spinner/Spinner'

type AvatarProps = {
    ava: string | null
    uploadPhoto: (photo: File) => void
    isOwner: boolean
    isLoading: boolean
}

export const Avatar = React.memo(({
                                      ava,
                                      uploadPhoto,
                                      isOwner,
                                      isLoading
                                  }: AvatarProps) => {

    const inRef = useRef<HTMLInputElement>(null)

    const upload = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            uploadPhoto(e.target.files[0])
        }
    }

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div className={s.avatar_block}>
            {
                isOwner
                    ? <>
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
                    </>
                    : <img src={ava ? ava : emptyAva}
                           alt="ava"
                    />
            }
        </div>
    )
})
