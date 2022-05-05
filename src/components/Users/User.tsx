import s from './Users.module.css'
import {UserType} from '../Redux/users-reducer'
import {Avatar} from './Avatar/Avatar'
import {FollowUnfollow} from './FollowUnfollow/FollowUnfollow'
import {UserDataFrame} from './UserDataFrame/UserDataFrame'

type UserPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    followingInProgress: Array<number>
}

type PropsType = UserPropsType & UserType

function User({name, id, status, followed, photos, location, unfollow, follow, followingInProgress}: PropsType) {

    const followingProgress: boolean = followingInProgress.some((num) => num === id)

    return <div className={s.user__block}>
        <div className={s.user__avaFollowed}>
            <Avatar id={id} photos={photos} followingProgress={followingProgress} />
            <FollowUnfollow id={id}
                            followingProgress={followingProgress}
                            followed={followed}
                            follow={follow}
                            unfollow={unfollow}
            />
        </div>
        <UserDataFrame name={name} status={status} location={location} />
    </div>
}

export default User