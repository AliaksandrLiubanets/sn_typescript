import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Navbar.module.css'
import Friends from './Friends'
import {FriendsType} from '../Redux/store'

type NavbarPropsType = {
    friends: Array<FriendsType>
}

function Navbar(props: NavbarPropsType) {

    return <div className={s.navbar}>
        <div><NavLink to="/profile" className={({ isActive }) => (isActive ? s.active : "")}>Profile</NavLink></div>
        <div><NavLink to="/dialogs" className={({ isActive }) => (isActive ? s.active : "")}>Dialogs</NavLink></div>
        <div><NavLink to="/news" className={({ isActive }) => (isActive ? s.active : "")}>News</NavLink></div>
        <div><NavLink to="/music" className={({ isActive }) => (isActive ? s.active : "")}>Music</NavLink></div>
        <div><NavLink to="/settings" className={({ isActive }) => (isActive ? s.active : "")}>Settings</NavLink></div>
        <Friends friends={props.friends}/>
    </div>

}

export default Navbar