import s from './Dialogs.module.css'
import {DialogsItem} from './DialogsItem'
import {Message} from './Message'
import {v1} from 'uuid'

export type dialogsElementType = {
    id: string
    name: string
}

export type messagesElementType = {
    id: string
    message: string
}

function Dialogs() {

    const dialogsData:Array<dialogsElementType> = [
        {id: v1(), name: "Dimych"},
        {id: v1(), name: "Andrew"},
        {id: v1(), name: "Lenin"},
        {id: v1(), name: "Pushkin"},
        {id: v1(), name: "Dragunsky"},
        {id: v1(), name: "Ostrovskiy"},
    ]

    const messagesData: messagesElementType[] = [
        {id: v1(), message: "Hello!"},
        {id: v1(), message: "How is your profile on LinkedIn?"},
        {id: v1(), message: "One more request!"},
    ]

    return <div className={s.dialogs}>
        <div className={s.dialogsItem}>
            {dialogsData.map((el: dialogsElementType) => <DialogsItem  key={el.id} name={el.name} id={el.id} />)}
        </div>
        <div className={s.messages}>
            {messagesData.map((el: messagesElementType) => <Message key={el.id} message={el.message} />)}
        </div>
    </div>
}

export default Dialogs