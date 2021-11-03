import s from '../Dialogs.module.css'
import Message from '../Message/Message'
import {DialogsPageMessagesType, StateType} from '../../Redux/state'
import TextareaField from '../TextareaField'
import {useParams} from 'react-router-dom'

type DialogPropsType = {
    messages: DialogsPageMessagesType
    textareaCurrentValue: string
    // addPostText: (text:string) => StateType
    setCurrentTextValue: (text:string) => StateType
}

function Dialog(props: DialogPropsType) {

    const {name} = useParams<{name: string}>()
    const avaNameMessage = props.messages[name.toLowerCase()].map(m => <Message key={m.id} message={m.message} name={m.name} ava={m.ava}/>)

    return <div className={s.ava_message}>
        <div>{avaNameMessage}</div>
        <TextareaField textareaCurrentValue={props.textareaCurrentValue}
                       // addPostText={props.addPostText}
                       setCurrentTextValue={props.setCurrentTextValue}/>
    </div>
}

export default Dialog