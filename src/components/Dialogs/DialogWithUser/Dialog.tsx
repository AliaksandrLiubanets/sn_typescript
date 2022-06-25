import s from '../Dialogs.module.css'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {dialogsActions, MessageType} from '../../Redux/dialogs-reducer'
import {Message} from '../MessageField/Message'
import React, {FC} from 'react'
import {dialogsSelector} from '../../../selectors/selectors'
import {Messages} from '../../common/Message/Messages'
import {AddMessage} from '../AddMessage'

export const Dialog: FC = () => {
    const dispatch = useDispatch()
    const {messages, ownAvatar} = useSelector(dialogsSelector)
    const {name} = useParams<string>()
    const addDialogPost = (text: string) => dispatch(dialogsActions.addDialogMessage(text, name ? name : ''))
    // const onEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>, text: string) => e.key === 'Enter' && addDialogPost(text)
    const avaNameMessage = name && messages[name.toLowerCase()].map((m: MessageType) => <Message key={m.id}
                                                                                                 message={m}
    />)

    return <div className={s.ava_message}>
        <Messages message={avaNameMessage}/>
        <AddMessage addMessage={addDialogPost}
                    author={name}
                    url={ownAvatar}
                    // onEnter={onEnter}
                    padding
        />
    </div>
}
