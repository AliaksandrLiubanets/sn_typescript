import {useDispatch} from 'react-redux'
import {loginOut} from '../Redux/auth-reducer'
import s from '../Header/Header.module.css'


export const LogOut = () => {

    const dispatch = useDispatch()

    const onLogout = () => dispatch(loginOut())

    return <div className={s.logout} onClick={onLogout}>
        Log out
    </div>
}