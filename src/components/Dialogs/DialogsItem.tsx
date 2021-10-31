import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.css'

type DialogsItemType = {
    id: string
    name: string
    ava: string
}

export function DialogsItem(props: DialogsItemType) {
    // let path = `/dialogs/${props.id}`
    let path = `/dialogs/user-dialog`

    return <div className={s.dialog_user}>
        <NavLink to={path}>
            <img src={props.ava} alt={'ava'}/>
            <div>{props.name}</div>
        </NavLink>
    </div>
}