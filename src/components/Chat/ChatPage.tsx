import {FC, useEffect, useState} from 'react'
import {ChatMessageType} from '../../api/chat-api'
import {useDispatch, useSelector} from 'react-redux'
import {sendMessage, startMessagesListening, stopMessagesListening} from '../Redux/chat-reducer'
import {chatSelector} from '../../selectors/selectors'
import s from '../common/Message/Message.module.css'
import {MessageAuthor} from '../common/Message/MessageAuthor'
import {MessageText} from '../common/Message/MessageText'
import {MessageAvatar} from '../common/Message/MessageAvatar'

const ChatPage: FC = () => {
    return <div>
        <Chat/>
    </div>
}

const Chat: FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    return <div>
        <Messages />
        <AddMessage />
    </div>
}

export const Messages: FC = () => {

    const {messages} = useSelector(chatSelector)

    return <div style={{'height': '400px', 'overflowY': 'auto'}}>
        {messages.map((m, index) => <Message message={m} key={index}/>)}
    </div>
}

type MessageType = { message: ChatMessageType }

export const Message: FC<MessageType> = ({message}) => {

    // return <div>
    //     <img src={message.photo} style={{width: '30px'}} alt={'avatar'}/><b>{message.userName}</b>
    //     <br/>
    //     {message.message}
    //     <hr/>
    // </div>

    return <div className={s.message_block}>
        <div className={s.ava_name_message}>
            <MessageAvatar url={message.photo}/>
            <MessageAuthor author={message.userName}/>
        </div>
        <div className={s.angle}></div>
        <MessageText text={message.message}/>
    </div>
}


export const AddMessage: FC = () => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    const dispatch = useDispatch()

    const sendMessageHandler = () => {
        if (!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage('')
    }

    return <div>
        <textarea value={message} onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
        <button disabled={false} onClick={sendMessageHandler}>Submit</button>
    </div>
}

export default ChatPage