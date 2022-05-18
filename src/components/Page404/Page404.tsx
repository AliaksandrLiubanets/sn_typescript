import {NavLink} from 'react-router-dom'
import p from '../Profile/Profile.module.css'
import s from './Page404.module.css'

export const Page404 = () => {
    return <div className={`${p.page_block} ${s.error}`}>
        <div className={s.error__type}>404</div>
        <div className={s.error__text}>Page not found</div>
        <div className={s.error__link}>
            visit <NavLink to={'/profile'}>profile</NavLink>
        </div>
    </div>
}