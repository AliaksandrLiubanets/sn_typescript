import s from './Users.module.css'
import {NavLink} from 'react-router-dom'
import {usersAPI} from '../../api/api'
import {UserType} from '../Redux/users-reducer'
import emptyAva from '../../assets/empty_avatar.jpg'
import {Preloader} from '../common/Preloader/Preloader'

type UserPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    followingInProgress: Array<number>
    setFollowingInProgress: (isFetching: boolean, userId: number) => void
}

type PropsType = UserPropsType & UserType

function User({name, id, status, followed, photos, location, unfollow, follow, followingInProgress, setFollowingInProgress}: PropsType) {

    // const [isFetching, setIsFetching] = useState(false)

    return <div className={s.user__block}>
        <div className={s.user__avaFollowed}>
            {
                followingInProgress.some((num) => num === id) && <div className={s.user_preloader}><Preloader/></div>
            }

            <NavLink to={`/profile/${id}`}>
                <div className={s.user__ava}>
                    <img src={photos.small ? photos.small : emptyAva} alt="ava"/>
                </div>
            </NavLink>
            <div className={s.user__followed}>
                {
                    followed
                        ? <button disabled={followingInProgress.some(num => num === id)} onClick={() => {
                            // setFollowingInProgress(true, id)
                            // usersAPI.unfollowUser(id)
                            //     .then(response => {
                            //         if (response.data.resultCode === 0) {
                            //             unfollow(id)
                            //         }
                            //         setFollowingInProgress(false, id)
                            //     })
                        unfollow(id)
                        }}>unfollow</button>
                        : <button disabled={followingInProgress.some(num => num === id)} onClick={() => {
                            // setFollowingInProgress(true, id)
                            // usersAPI.followUser(id)
                            //     .then(response => {
                            //         if (response.data.resultCode === 0) {
                            //             follow(id)
                            //         }
                            //         setFollowingInProgress(false, id)
                            //     })
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