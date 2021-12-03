import s from './Users.module.css'

function User(props) {
    return <div className={s.user__block}>
            <div className={s.user__avaFollowed}>
                <div className={s.user__ava}></div>
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