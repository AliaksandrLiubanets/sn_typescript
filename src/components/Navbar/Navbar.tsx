import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Navbar.module.css'
import {FriendsContainer} from './Friends'
import p from '../Profile/Profile.module.css'
import {PATH} from '../../enums/path'

function Navbar() {

    return <div className={s.navbar}>
        <div className={p.page_block}>
            <div><NavLink to={PATH.PROFILE} className={({isActive}) => (isActive ? s.active : '')}>Profile</NavLink></div>
            <div><NavLink to={PATH.DIALOGS_LIST} className={({isActive}) => (isActive ? s.active : '')}>Dialogs</NavLink></div>
            <div><NavLink to={PATH.NEWS} className={({isActive}) => (isActive ? s.active : '')}>News</NavLink></div>
            <div><NavLink to={PATH.MUSIC} className={({isActive}) => (isActive ? s.active : '')}>Music</NavLink></div>
            <div><NavLink to={PATH.USERS} className={({isActive}) => (isActive ? s.active : '')}>Users</NavLink></div>
            <div><NavLink to={PATH.SETTINGS} className={({isActive}) => (isActive ? s.active : '')}>Settings</NavLink></div>
            <div><NavLink to={PATH.CHAT} className={({isActive}) => (isActive ? s.active : '')}>Chat</NavLink></div>
            <FriendsContainer/>
        </div>
    </div>
}

export default Navbar