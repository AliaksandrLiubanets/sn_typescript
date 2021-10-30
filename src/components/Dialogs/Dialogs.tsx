import s from './Dialogs.module.css'
import {DialogsItem} from './DialogsItem'
import {Message} from './Message'
import {dialogType, messageType} from '../Redux/state'

type dialogsStateType = {
    messages: Array<messageType>
    dialogs: Array<dialogType>
}

type  DialogsPropsType = {
    dialogsState: dialogsStateType
}

function Dialogs(props: DialogsPropsType) {

    return <div className={s.dialogs}>
        <div className={s.dialogsItem}>
            {props.dialogsState.dialogs.map((d: dialogType) => <DialogsItem  key={d.id} name={d.name} id={d.id} />)}
        </div>
        <div className={s.messages}>
            {props.dialogsState.messages.map((m: messageType) => <Message key={m.id} message={m.message} />)}
        </div>
    </div>
}

export default Dialogs