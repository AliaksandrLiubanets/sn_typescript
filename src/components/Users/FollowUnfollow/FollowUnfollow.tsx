import s from './FollowUnfollow.module.css'
import {FC} from 'react'

type FollowUnfollowType = {
    id: number
    followed: boolean
    followingProgress: boolean
    follow: (id: number) => void
    unfollow: (id: number) => void
}

export const FollowUnfollow: FC<FollowUnfollowType> = ({id, followed, followingProgress, follow, unfollow}) => {
    return <div className={s.user__followed}>
        {
            followed
                ? <button disabled={followingProgress} onClick={() => {
                    unfollow(id)
                }}>unfollow</button>
                : <button disabled={followingProgress} onClick={() => {
                    follow(id)
                }}>follow</button>
        }
    </div>
}