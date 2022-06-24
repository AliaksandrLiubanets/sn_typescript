import React, {FC, useEffect, useRef, useState} from 'react'
import {ChatMessageAPIType} from '../../api/chat-api'
import {useDispatch, useSelector} from 'react-redux'
import {sendMessage, startMessagesListening, stopMessagesListening} from '../Redux/chat-reducer'
import {chatSelector} from '../../selectors/selectors'
import p from '../Profile/Profile.module.css'
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
    const {status} = useSelector(chatSelector)

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    return <div>
        {status === 'error' ? <div>Some error occured. Please refresh page</div> :
            <>
                <Messages/>
                <AddMessage/>
            </>
        }
    </div>
}

export const Messages: FC = () => {

    const {messages} = useSelector(chatSelector)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [isAutoScroll, setIsAutoScroll] = useState(true)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
        const element = e.currentTarget

        if(Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(() => {
        if(isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages, isAutoScroll])

    return <div style={{'height': '400px', 'overflowY': 'auto'}}
                className={p.page_block} onScroll={scrollHandler}>
        {messages.map((m) => <Message message={m} key={m.id}/>)}
        <div ref={messagesAnchorRef}></div>
    </div>
}

type MessageType = { message: ChatMessageAPIType }

export const Message: FC<MessageType> = React.memo(({message}) => {
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
})


export const AddMessage: FC = () => {
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()
    const {status} = useSelector(chatSelector)

    const sendMessageHandler = () => {
        if (!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage('')
    }

    return <div className={p.page_block}>
        <textarea value={message} onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
        <button disabled={status !== 'ready'} onClick={sendMessageHandler}>Submit</button>
    </div>
}

export default ChatPage