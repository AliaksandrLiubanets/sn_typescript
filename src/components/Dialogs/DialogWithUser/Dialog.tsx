import s from '../Dialogs.module.css'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {dialogsActions} from '../../Redux/dialogs-reducer'
import {Message} from '../MessageField/Message'
import React, {FC} from 'react'
import {dialogsSelector} from '../../../selectors/selectors'
import {Messages} from '../../common/Message/Messages'
import {AddMessage} from '../AddMessage'
import {ChatMessageAPIType} from '../../../api/chat-api'

export const Dialog: FC = () => {
    const dispatch = useDispatch()
    const {messages, ownAvatar} = useSelector(dialogsSelector)
    const {name} = useParams<string>()
    const addDialogPost = (text: string) => dispatch(dialogsActions.addDialogMessage(text, name ? name : ''))
    const avaNameMessage = name && messages[name.toLowerCase()].map((m: ChatMessageAPIType) => <Message key={m.userId}
                                                                                                 message={m}
    />)

    return <div className={s.ava_message}>
        <Messages messages={avaNameMessage}/>
        <AddMessage addMessage={addDialogPost}
                    author={name}
                    url={ownAvatar}
                    isOnEnterPress
                    padding
        />
    </div>
}
