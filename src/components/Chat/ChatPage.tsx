import React, {FC, useEffect, useRef, useState} from 'react'
import {ChatMessageAPIType} from '../../api/chat-api'
import {useDispatch, useSelector} from 'react-redux'
import {sendMessage, startMessagesListening, stopMessagesListening} from '../Redux/chat-reducer'
import {authSelector, chatSelector} from '../../selectors/selectors'
import p from '../Profile/Profile.module.css'
import s from '../common/Message/Message.module.css'
import {MessageAuthor} from '../common/Message/MessageAuthor'
import {MessageText} from '../common/Message/MessageText'
import {MessageAvatar} from '../common/Message/MessageAvatar'
import {AddMessage} from '../Dialogs/AddMessage'

const ChatPage: FC = () => {
    return <div>
        <Chat/>
    </div>
}

const Chat: FC = () => {

    const dispatch = useDispatch()
    const {status} = useSelector(chatSelector)
    const {ownAvatar} = useSelector(authSelector)

    const sendMessageHandler = (message: string) => {
        dispatch(sendMessage(message))
    }

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    return <div>
        {status === 'error' ? <div>Some error occured. Please refresh page</div> :
            <div className={p.page_block}>
                <Messages/>
                <AddMessage addMessage={sendMessageHandler}
                            url={ownAvatar}
                            disabled={status !== 'ready'}
                            padding={true}
                />
            </div>
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
                onScroll={scrollHandler}>
        {messages.map((m) => <Message message={m} key={m.id}/>)}
        <div ref={messagesAnchorRef}></div>
    </div>
}

type MessageType = { message: ChatMessageAPIType }

export const Message: FC<MessageType> = React.memo(({message}) => {

    return <div className={s.message_block}>
        <div className={s.ava_name_message}>
            <MessageAvatar url={message.photo}/>
            <MessageAuthor author={message.userName}/>
        </div>
        <div className={s.angle}></div>
        <MessageText text={message.message}/>
    </div>
})

export default ChatPage