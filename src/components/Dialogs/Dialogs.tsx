import s from './Dialogs.module.css'
import {DialogsItem} from './DialogsItem'
import {Message} from './Message'
import {dialogType, messageType} from '../../index'

type  DialogsPropsType = {
    messages: Array<messageType>
    dialogs: Array<dialogType>
}

function Dialogs(props: DialogsPropsType) {

    return <div className={s.dialogs}>
        <div className={s.dialogsItem}>
            {props.dialogs.map((d: dialogType) => <DialogsItem  key={d.id} name={d.name} id={d.id} />)}
        </div>
        <div className={s.messages}>
            {props.messages.map((m: messageType) => <Message key={m.id} message={m.message} />)}
        </div>
    </div>
}

export default Dialogs