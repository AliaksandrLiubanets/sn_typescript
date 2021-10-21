import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

type DialogsItemType = {
    id: number
    name: string
}

type MessageType = {
    message: string
}

function DialogsItem(props: DialogsItemType) {
    let path = `/dialogs/${props.id}`

    return <div>        
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

function Message(props: MessageType) {
    return <div>{props.message}</div>
}

function Dialogs() {
    return <div className={s.dialogs}>
        <div className={s.dialogsItem}>
            <DialogsItem name="Dimych" id={1} />
            <DialogsItem name="Andrew" id={2} />
            <DialogsItem name="Lenin" id={3} />
            <DialogsItem name="Pushkin" id={4} />
            <DialogsItem name="Nikolay" id={5} />
            <DialogsItem name="Ostrovskiy" id={6} />
        </div>
        <div className={s.messages}>
            <Message message="Hello!" />
            <Message message="How is it going!" />
            <Message message="Yo!" />
        </div>
    </div>
}

export default Dialogs