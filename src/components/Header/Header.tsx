import empty_avatar from "../../assets/empty_avatar.jpg";
import s from './Header.module.css'
import React from "react";

function Header() {
    return <div className={s.header}>
        <img src={empty_avatar}/>
    </div>
}

export default Header

