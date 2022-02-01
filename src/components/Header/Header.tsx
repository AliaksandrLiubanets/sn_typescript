import empty_avatar from "../../assets/empty_avatar.jpg";
import s from './Header.module.css'
import React from "react";

type HeaderProps = {
    login: string | null
    avatar?: string | null
    isAuth: boolean
}

export function Header({login, avatar, isAuth}: HeaderProps) {

    return <div className={s.header}>
        {isAuth
            ?
            <div>
                <img src={''} alt={'ava'}/>
                <span>{login}</span>
            </div>
            :
            <div>
                <img src={empty_avatar} alt={'ava'}/>
                <span>{"Login"}</span>
            </div>
        }

    </div>
}

