import s from './Users.module.css'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

type PropsType = {
    id: string
    name: string
    status: string
    followed: boolean
    location?: {
        city: string
        country: string
    }
    photo: string | undefined
    follow: (id: string) => void
    unfollow: (id: string) => void
}

function User({name, id, status, followed, photo, location, unfollow, follow}: PropsType) {
    return <div className={s.user__block}>
        <div className={s.user__avaFollowed}>
            <NavLink to={`/profile/${id}`}>
            {/*<NavLink to='/profile' >*/}
                <div className={s.user__ava}>
                    <img src={photo} alt="ava"/>
                </div>
            </NavLink>
            <div className={s.user__followed}>
                {
                    followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
                                {
                                    withCredentials: true,
                                    headers: {"API-KEY": "ec259ea8-b888-43af-83e9-f75c638bfe8f"},
                                })
                                .then(response => {
                                    if(response.data.resultCode === 0) {
                                        unfollow(id)
                                    }
                                })
                        }}>unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {},
                                {
                                    withCredentials: true,
                                    headers: {"API-KEY": "ec259ea8-b888-43af-83e9-f75c638bfe8f"},
                                })
                                .then(response => {
                                    if(response.data.resultCode === 0) {
                                        follow(id)
                                    }
                                })
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