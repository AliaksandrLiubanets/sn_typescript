import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'
import ava_lenin from '../../assets/ava_lenin.png'
import ava_olga from '../../assets/ava_olga.jpg'
import ava_karina from '../../assets/ava_karina.jpg'

function Navbar() {
    return <div className={s.navbar}>
        <div><NavLink to='/profile' activeClassName={s.active}>Profile</NavLink></div>
        <div><NavLink to='/dialogs' activeClassName={s.active}>Dialogs</NavLink></div>
        <div><NavLink to='/news' activeClassName={s.active}>News</NavLink></div>
        <div><NavLink to='/music' activeClassName={s.active}>Music</NavLink></div>
        <div><NavLink to='/settings' activeClassName={s.active}>Settings</NavLink></div>
        <div className={s.friends_block}>
            <h4>Friends</h4>
            <div className={s.friends}>
                <div className={s.ava_name}>
                    <div><img src={ava_lenin} alt={'ava'}/></div>
                    <div className={s.name}>Artem</div>
                </div><div className={s.ava_name}>
                    <div><img src={ava_olga} alt={'ava'}/></div>
                    <div className={s.name}>Olga</div>
                </div><div className={s.ava_name}>
                    <div><img src={ava_karina} alt={'ava'}/></div>
                    <div className={s.name}>Karina</div>
                </div>
            </div>

        </div>
    </div>

}

export default Navbar