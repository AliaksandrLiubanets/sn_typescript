import s from './Dialogs.module.css'
import {DialogsItem} from './DialogsItem'
import {dialogType, messageType} from '../Redux/state'

type dialogsStateType = {
    messages: Array<messageType>
    dialogs: Array<dialogType>
}

type  DialogsPropsType = {
    dialogsState: dialogsStateType
}

function Dialogs(props: DialogsPropsType) {

    const dialogsItems = props.dialogsState.dialogs.map((d: dialogType) => <DialogsItem key={d.id} name={d.name} id={d.id} ava={d.ava}/>)
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