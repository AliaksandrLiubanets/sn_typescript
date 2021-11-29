import s from '../Dialogs.module.css'
import Message from '../Message/Message'
import {useParams} from 'react-router-dom'
import {ActionsTypes, DialogsPageMessagesType} from '../../Redux/store'
import AddDialogPostContainer from '../AddDialogPostContainer'

type DialogPropsType = {
    messages: DialogsPageMessagesType
    textareaCurrentValue: string
    dispatch: (action: ActionsTypes) => void
}

function Dialog({messages, textareaCurrentValue, dispatch}: DialogPropsType) {
    const {name} = useParams<string>()
    const avaNameMessage = name && messages[name.toLowerCase()].map(m => <Message key={m.id} message={m.message} name={m.name} ava={m.ava}/>)

    return <div className={s.ava_message}>
        <div>{avaNameMessage}</div>
        <AddDialogPostContainer textareaCurrentValue={textareaCurrentValue}
                                name={name}
                                dispatch={dispatch}
        />
    </div>
}

export default Dialog