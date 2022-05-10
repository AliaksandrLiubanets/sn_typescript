import empty_avatar from '../../assets/empty_avatar.jpg'
import s from './Header.module.css'
import React from 'react'
import {NavLink} from 'react-router-dom'
import {LogOut} from '../Login/LogOut'
import {Spinner} from '../common/Spinner/Spinner'

type HeaderProps = {
    login: string | null
    avatar: string | null
    isAuth: boolean
    isInitializing: boolean
}

export function Header({
                           login,
                           avatar,
                           isAuth,
                           isInitializing
                       }: HeaderProps) {
    const HeaderBlock = () => {
        return <div className={s.header_block}>
            {isAuth
                ? <>
                    <div className={s.header__avalogin}>
                        <div>
                            <img src={!avatar ? empty_avatar : avatar} alt={'ava'}/>
                        </div>
                        <span>{login}</span>
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

    return <div className={s.header}>
        {
            isInitializing
                ? <Spinner/>
                : <HeaderBlock/>
        }

    </div>
}




