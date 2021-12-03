import s from './Users.module.css'
import emptyAva from '../../assets/empty_avatar.jpg'

type PropsType = {
    name: string
    status: string
    folllowed: boolean
    location?: {
        counntry: string
        city: string
    }
    photo: string
    follow: (id: string) => void
    unfollow: (id: string) => void

}

function User(props: PropsType) {
    return <div className={s.user__block}>
            <div className={s.user__avaFollowed}>
                <div className={s.user__ava}><img src={} alt=""/></div>
                <div className={s.user__followed}></div>
            </div>
            <div className={s.user__dataFrame}>
                <div className={s.user__dataFrame__nameStatus}>
                    <div className={s.user__name}></div>
                    <div className={s.user__status}></div>
                </div>
                <div className={s.user__dataFrame__location}>
                    <div className={s.user__country}></div>
                    <div className={s.user__city}></div>
                </div>
            </div>
    </div>
}

export default User