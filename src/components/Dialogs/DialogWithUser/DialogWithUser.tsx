import s from '../Dialogs.module.css'
import {DialogsStateType} from '../Dialogs'
import Message from '../Message'

type DialogWithUserType = {
    dialogsState: DialogsStateType
}

function DialogWithUser(props: DialogWithUserType) {

    const avaNameMessage = props.dialogsState.messages.map(m => <Message key={m.id} message={m.message} name={m.name} ava={m.ava}/>)


    return <div className={s.ava_message}>
        <div>{avaNameMessage}</div>
    </div>
}

export default DialogWithUser