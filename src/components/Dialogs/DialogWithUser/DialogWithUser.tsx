import s from '../Dialogs.module.css'
import Message from '../Messages/Message'
import {DialogsPageMessagesType} from '../../Redux/state'

type DialogWithUserPropsType = {
    dialogsState: DialogsPageMessagesType
}

function DialogWithUser(props: DialogWithUserPropsType) {

    const avaNameMessage = props.dialogsState.ostrovskiy.map(m => <Message key={m.id} message={m.message} name={m.name} ava={m.ava}/>)


    return <div className={s.ava_message}>
        <div>{avaNameMessage}</div>
    </div>
}

export default DialogWithUser