import {NavLink} from 'react-router-dom'

type DialogsItemType = {
    id: string
    name: string
}

export function DialogsItem(props: DialogsItemType) {
    let path = `/dialogs/${props.id}`

    return <div>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}