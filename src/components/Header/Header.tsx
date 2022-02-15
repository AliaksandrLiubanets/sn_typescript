import empty_avatar from "../../assets/empty_avatar.jpg";
import s from './Header.module.css'
import React from "react";
import sancho_ava from '../../assets/ECGP3801_1.jpg'
import {NavLink} from 'react-router-dom'
import {LogOut} from '../Login/LogOut'

type HeaderProps = {
    login: string | null
    avatar?: string | null
    isAuth: boolean
}

export function Header({login, avatar, isAuth}: HeaderProps) {

    return <div className={s.header}>
        {isAuth
            ?
            <div className={s.header_block}>
                <div className={s.header__avalogin}>
                    <div>
                        <img src={!avatar ? sancho_ava : avatar} alt={'ava'}/>
                    </div>
                    <span>{login}</span></div>

                <LogOut/>

            </div>
            :
            <div className={s.header_block}>
                <NavLink to='/login'>
                    <div>
                        <img src={empty_avatar} alt={'ava'}/>
                    </div>
                    <span>{'Login'}</span></NavLink>
            </div>
        }

    </div>
}

