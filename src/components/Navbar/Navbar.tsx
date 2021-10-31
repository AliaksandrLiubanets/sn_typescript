import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Navbar.module.css'
import {FriendsType} from '../Redux/state'
import Friend from './Friend'

type NavbarPropsType = {
    friends: Array<FriendsType>
}

function Navbar(props: NavbarPropsType) {

    const friends = props.friends.map(fr => <Friend key={fr.id} name={fr.name} ava={fr.ava}/>)


    return <div className={s.navbar}>
        <div><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
        <div><NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink></div>
        <div><NavLink to="/news" activeClassName={s.active}>News</NavLink></div>
        <div><NavLink to="/music" activeClassName={s.active}>Music</NavLink></div>
        <div><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></div>
        <div className={s.friends_block}>
            <h4>Friends</h4>
            <div className={s.friends}>
                {friends}
            </div>
        </div>
    </div>

}

export default Navbar