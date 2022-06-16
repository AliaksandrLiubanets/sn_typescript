import s from '../Dialogs.module.css'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {AddDialogPostContainer} from '../AddDialogPostContainer'
import {MessageType} from '../../Redux/dialogs-reducer'
import {MessageField} from '../MessageField/MessageField'
import {FC} from 'react'
import {dialogsSelector} from '../../../selectors/selectors'


export const Dialog: FC = () => {

    const {name} = useParams<string>()
    const {messages} = useSelector(dialogsSelector)
    const avaNameMessage = name && messages[name.toLowerCase()].map((m: MessageType) => <MessageField key={m.id}
                                                                                                      message={m.message}
                                                                                                      name={m.name}
                                                                                                      ava={m.ava}/>)

    return <div className={s.ava_message}>
        <div>{avaNameMessage}</div>
        <AddDialogPostContainer name={name || ''}/>
    </div>
}
