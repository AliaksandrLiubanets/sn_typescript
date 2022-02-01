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
            <div className={s.header_block}>
                <div>
                    <img src={''} alt={'ava'}/>
                </div>
                <span>{login}</span>
            </div>
            :
            <div className={s.header_block}>
                <div>
                    <img src={empty_avatar} alt={'ava'}/>
                </div>
                <span>{"Login"}</span>
            </div>
        }

    </div>
}

