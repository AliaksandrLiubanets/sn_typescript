import s from '../Dialogs.module.css'
import Message from '../Message/Message'
import {DialogsPageMessagesType} from '../../Redux/state'
import TextareaField from '../TextareaField'

type DialogPropsType = {
    dialogsState: DialogsPageMessagesType
    name: string
}

function Dialog(props: DialogPropsType) {

    const avaNameMessage = props.dialogsState[props.name.toLowerCase()].map(m => <Message key={m.id} message={m.message} name={m.name} ava={m.ava}/>)

    return <div className={s.ava_message}>
        <div>{avaNameMessage}</div>
        <TextareaField/>
    </div>
}

export default Dialog