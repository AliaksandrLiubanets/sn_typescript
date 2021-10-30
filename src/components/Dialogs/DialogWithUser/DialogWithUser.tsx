import s from '../Dialogs.module.css'
import {DialogsStateType} from '../Dialogs'

type DialogWithUserType = {
    dialogsState: DialogsStateType
}

function DialogWithUser(props: DialogWithUserType) {

    const avaNameMessage = props.dialogsState.messages.map(m => <div key={m.id}><div><img src={m.ava} alt={'ava'}/></div><div>{m.name}</div><div>{m.message}</div></div>)

    return <div className={s.ava_message}>
        <div>{avaNameMessage}</div>
    </div>
}

export default DialogWithUser