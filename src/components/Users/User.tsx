import s from './Users.module.css'
import {UserType} from '../Redux/users-reducer'
import {Avatar} from './Avatar/Avatar'
import {FollowUnfollow} from './FollowUnfollow/FollowUnfollow'

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
        <div className={s.user__dataFrame}>
            <div className={s.user__dataFrame__nameStatus}>
                <div className={s.user__name}>
                    {name}
                </div>
                <div className={s.user__status}>
                    {status}
                </div>
            </div>
            <div className={s.user__dataFrame__location}>
                <div className={s.user__country}>
                    {location ? location.country : `country`}
                </div>
                <div className={s.user__city}>
                    {location ? location.city : `city`}
                </div>
            </div>
        </div>
    </div>
}

export default User