import s from './Users.module.css'

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
            <div className={s.user__ava}>
                <img src={photo} alt="ava"/>
            </div>
            <div className={s.user__followed}>
                {
                    followed
                        ? <button onClick={() => unfollow(id)}>unfollow</button>
                        : <button onClick={() => follow(id)}>follow</button>
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