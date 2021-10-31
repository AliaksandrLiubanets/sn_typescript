import s from './Navbar.module.css'
import React from 'react'

type FriendsPropsType = {

    name: string
    ava: string
}

function Friend (props: FriendsPropsType ) {
    return <div className={s.ava_name}>
        <div><img src={props.ava} alt={'ava'}/></div>
        <div className={s.name}>{props.name}</div>
    </div>
}

export default Friend