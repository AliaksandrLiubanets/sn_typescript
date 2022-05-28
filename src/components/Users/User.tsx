import s from './Users.module.css'
import {follow, unfollow, UserType} from '../Redux/users-reducer'
import {Avatar} from './Avatar/Avatar'
import {FollowUnfollow} from './FollowUnfollow/FollowUnfollow'
import {UserDataFrame} from './UserDataFrame/UserDataFrame'
import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'

type UserPropsType = {
    followingInProgress: Array<number>
}

type PropsType = UserPropsType & UserType

export const User = React.memo(({name, id, status, followed, photos, location, followingInProgress}: PropsType) => {

    const followingProgress: boolean = followingInProgress.some((num) => num === id)
    const dispatch = useDispatch()
    const onFollow = useCallback(() => dispatch(follow(id)),[dispatch])
    const onUnfollow = useCallback(() => dispatch(unfollow(id)), [dispatch])

    return <div className={s.user__block}>
        <div className={s.user__avaFollowed}>
            <Avatar id={id} photos={photos} followingProgress={followingProgress} />
            <FollowUnfollow id={id}
                            followingProgress={followingProgress}
                            followed={followed}
                            follow={onFollow}
                            unfollow={onUnfollow}
            />
        </div>
        <UserDataFrame name={name} status={status} location={location} />
    </div>
})
