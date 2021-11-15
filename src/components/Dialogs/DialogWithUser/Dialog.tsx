import s from '../Dialogs.module.css'
import Message from '../Message/Message'
import TextareaField from '../TextareaField'
import {useParams} from 'react-router-dom'
import {ActionsTypes, DialogsPageMessagesType} from '../../Redux/store'

type DialogPropsType = {
    messages: DialogsPageMessagesType
    textareaCurrentValue: string
    dispatch: (action: ActionsTypes) => void
}

function Dialog(props: DialogPropsType) {
    const {name} = useParams<{name: string}>()
    const avaNameMessage = props.messages[name.toLowerCase()].map(m => <Message key={m.id} message={m.message} name={m.name} ava={m.ava}/>)

    return <div className={s.ava_message}>
        <div>{avaNameMessage}</div>
        <TextareaField textareaCurrentValue={props.textareaCurrentValue} name={name} dispatch={props.dispatch}
        />
    </div>
}

export default Dialog