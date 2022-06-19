import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.css'
import React from 'react'
import {useDispatch} from 'react-redux'
import {dialogsActions} from '../Redux/dialogs-reducer'

type DialogsItemType = {
    id: string
    name: string
    ava: string
}

export const DialogsItem = React.memo((props: DialogsItemType) => {
    let path = `/dialogs/${props.name}`
    const dispatch = useDispatch()
    const cleanCurrentValue = () => {
        dispatch(dialogsActions.setCurrentValueDialog(''))
    }

    return <div className={s.dialog_user}>
        <NavLink onClick={cleanCurrentValue} to={path} className={({ isActive }) => (isActive ? s.active : "")}>
            <img src={props.ava} alt={'ava'}/>
            <div>{props.name}</div>
        </NavLink>
    </div>
})