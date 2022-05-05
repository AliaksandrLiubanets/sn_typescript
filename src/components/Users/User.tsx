import s from './Users.module.css'
import {UserType} from '../Redux/users-reducer'
import {Avatar} from './Avatar'

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
            <div className={s.user__followed}>
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