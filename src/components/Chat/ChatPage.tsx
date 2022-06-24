import React, {FC, useEffect, useRef, useState} from 'react'
import {ChatMessageType} from '../../api/chat-api'
import {useDispatch, useSelector} from 'react-redux'
import {sendMessage, startMessagesListening, stopMessagesListening} from '../Redux/chat-reducer'
import {chatSelector} from '../../selectors/selectors'

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
        // console.log('element.scrollHeight:', element.scrollHeight)
        // console.log('element.scrollTop:', element.scrollTop)
        // console.log('element.clientHeight:', element.clientHeight)

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
    }, [messages])

    return <div style={{'height': '400px', 'overflowY': 'auto'}} onScroll={scrollHandler}>
        {messages.map((m, index) => <Message message={m} key={index}/>)}
        <div ref={messagesAnchorRef}></div>
    </div>
}

type MessageType = { message: ChatMessageType }

export const Message: FC<MessageType> = React.memo(({message}) => {
    console.log('Message>>>>>>>>')
    return <div>
        <img src={message.photo} style={{width: '30px'}} alt={'avatar'}/><b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>

    // return <div className={s.message_block}>
    //     <div className={s.ava_name_message}>
    //         <MessageAvatar url={message.photo}/>
    //         <MessageAuthor author={message.userName}/>
    //     </div>
    //     <div className={s.angle}></div>
    //     <MessageText text={message.message}/>
    // </div>
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

    return <div>
        <textarea value={message} onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
        <button disabled={status !== 'ready'} onClick={sendMessageHandler}>Submit</button>
    </div>
}

export default ChatPage