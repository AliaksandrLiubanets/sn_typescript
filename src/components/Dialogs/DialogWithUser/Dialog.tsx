import s from '../Dialogs.module.css'
import Message from '../Message/Message'
import {addPostTextDialog, DialogsPageMessagesType, setCurrentTextValueInDialog, StateType} from '../../Redux/state'
import TextareaField from '../TextareaField'
import {useParams} from 'react-router-dom'

type DialogPropsType = {
    messages: DialogsPageMessagesType
    textareaCurrentValue: string
    setCurrentTextValueInDialog: (text:string) => void
    addPostTextDialog: (name: string) => void
}

function Dialog(props: DialogPropsType) {

    const {name} = useParams<{name: string}>()
    const avaNameMessage = props.messages[name.toLowerCase()].map(m => <Message key={m.id} message={m.message} name={m.name} ava={m.ava}/>)

    return <div className={s.ava_message}>
        <div>{avaNameMessage}</div>
        <TextareaField name={name} textareaCurrentValue={props.textareaCurrentValue}
                       setCurrentTextValueInDialog={props.setCurrentTextValueInDialog} addPostTextDialog={props.addPostTextDialog}/>
    </div>
}

export default Dialog