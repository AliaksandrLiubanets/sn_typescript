import React from "react";
import s from './Navbar.module.css'

function Navbar() {
    return <div className={s.navbar}>
        <div>Profile</div>
        <div>Message</div>
        <div>News</div>
        <div>Music</div>
        <div>Settings</div>
    </div>
}

export default Navbar