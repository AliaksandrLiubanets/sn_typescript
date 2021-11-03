import s from '../Dialogs.module.css'
import Message from '../Message/Message'
import {DialogsPageMessagesType} from '../../Redux/state'
import TextareaField from '../TextareaField'
import {useParams} from 'react-router-dom'

type DialogPropsType = {
    dialogsState: DialogsPageMessagesType
}

function Dialog(props: DialogPropsType) {

    const {name} = useParams<{name: string}>()
    const avaNameMessage = props.dialogsState[name.toLowerCase()].map(m => <Message key={m.id} message={m.message} name={m.name} ava={m.ava}/>)

    return <div className={s.ava_message}>
        <div>{avaNameMessage}</div>
        <TextareaField/>
    </div>
}

export default Dialog