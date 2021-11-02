import s from './Dialogs.module.css'
import {DialogsItem} from './DialogsItem'
import {DialogsPageMessagesType, DialogType} from '../Redux/state'

export type DialogsStateType = {
    messages: DialogsPageMessagesType
    dialogs: Array<DialogType>
}

type  DialogsPropsType = {
    dialogsState: DialogsStateType
}

function Dialogs(props: DialogsPropsType) {

    const dialogsItems = props.dialogsState.dialogs.map((d: DialogType) => <DialogsItem key={d.id} name={d.name} id={d.id} ava={d.ava} />)
    // const messagesItems = props.dialogsState.messages.map((m: messageType) => <Message key={m.id} message={m.message} />)

    return <div className={s.dialogs}>
        <div>
            <h4>DIALOGS</h4>
            {dialogsItems}
        </div>
        {/*<div className={s.messages}>*/}
        {/*    {messagesItems}*/}
        {/*</div>*/}
    </div>
}

export default Dialogs