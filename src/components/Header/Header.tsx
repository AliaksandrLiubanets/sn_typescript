import empty_avatar from '../../assets/empty_avatar.jpg'
import s from './Header.module.css'
import React from 'react'
import {NavLink} from 'react-router-dom'
import {LogOut} from '../Login/LogOut'
import {Spinner} from '../common/Spinner/Spinner'
import p from '../Profile/Profile.module.css'
import {useSelector} from 'react-redux'
import {appSelector, authSelector} from '../../selectors/users-selectors'

export function Header() {
    const {isInitializing} = useSelector(appSelector)

    if (isInitializing) {
        return <Spinner/>
    }

    return (
        <div className={`${p.page_block} ${s.header}`}>
            <HeaderBlock/>
        </div>
    )
}


const HeaderBlock = () => {
    const {data, isAuth, ownAvatar} = useSelector(authSelector)

    return <div className={s.header_block}>
        {isAuth
            ? <>
                <div className={s.header__avalogin}>
                    <div>
                        <img src={!ownAvatar ? empty_avatar : ownAvatar} alt={'ava'}/>
                    </div>
                    <span>{data.login}</span>
                </div>
                <LogOut/>
            </>
            :
            <>
                <NavLink to="/login">
                    <div>
                        <img src={empty_avatar} alt={'ava'}/>
                    </div>
                    <span>Login</span>
                </NavLink>
            </>
        }
    </div>
}



