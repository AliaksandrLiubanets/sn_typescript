import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.css'
import React from 'react'

type DialogsItemType = {
    id: string
    name: string
    ava: string
}

export function DialogsItem(props: DialogsItemType) {
    let path = `/dialogs/${props.name}`


    return <div className={s.dialog_user}>
        <NavLink to={path} activeClassName={s.active}>
            <img src={props.ava} alt={'ava'}/>
            <div>{props.name}</div>
        </NavLink>
    </div>
}