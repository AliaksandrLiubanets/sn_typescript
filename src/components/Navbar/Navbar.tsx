import React from "react";
import s from './Navbar.module.css'

function Navbar() {
    return <div className={s.navbar}>
        <div><a href='/profile'>Profile</a></div>
        <div><a href='/dialogs'>Dialogs</a></div>
        <div><a href='/news'>News</a></div>
        <div><a href='/music'>Music</a></div>
        <div><a href='/settings'>Settings</a></div>
    </div>
}

export default Navbar