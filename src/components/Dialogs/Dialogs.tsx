import s from './Dialogs.module.css'
import {DialogsItem} from './DialogsItem'
import {Message} from './Message'
import {v1} from 'uuid'

export type dialogType = {
    id: string
    name: string
}

export type messageType = {
    id: string
    message: string
}

const messages: messageType[] = [
    {id: v1(), message: "Hello!"},
    {id: v1(), message: "How is your profile on LinkedIn?"},
    {id: v1(), message: "One more request!"},
]

const dialogs:Array<dialogType> = [
    {id: v1(), name: "Dimych"},
    {id: v1(), name: "Andrew"},
    {id: v1(), name: "Lenin"},
    {id: v1(), name: "Pushkin"},
    {id: v1(), name: "Dragunsky"},
    {id: v1(), name: "Ostrovskiy"},
]

function Dialogs() {

    return <div className={s.dialogs}>
        <div className={s.dialogsItem}>
            {dialogs.map((d: dialogType) => <DialogsItem  key={d.id} name={d.name} id={d.id} />)}
        </div>
        <div className={s.messages}>
            {messages.map((m: messageType) => <Message key={m.id} message={m.message} />)}
        </div>
    </div>
}

export default Dialogs