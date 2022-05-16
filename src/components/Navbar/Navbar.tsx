import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Navbar.module.css'
import {FriendsContainer} from './Friends'
import p from '../Profile/Profile.module.css'

function Navbar() {

    return <div className={s.navbar}>
        <div className={p.page_block}>
            <div><NavLink to="/profile" className={({isActive}) => (isActive ? s.active : '')}>Profile</NavLink></div>
            <div><NavLink to="/dialogs" className={({isActive}) => (isActive ? s.active : '')}>Dialogs</NavLink></div>
            <div><NavLink to="/news" className={({isActive}) => (isActive ? s.active : '')}>News</NavLink></div>
            <div><NavLink to="/music" className={({isActive}) => (isActive ? s.active : '')}>Music</NavLink></div>
            <div><NavLink to="/users" className={({isActive}) => (isActive ? s.active : '')}>Users</NavLink></div>
            <div><NavLink to="/settings" className={({isActive}) => (isActive ? s.active : '')}>Settings</NavLink></div>
            <FriendsContainer/>
        </div>
    </div>
}

export default Navbar