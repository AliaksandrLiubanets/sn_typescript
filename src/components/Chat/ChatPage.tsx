import React, {FC, useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {sendMessage, startMessagesListening, stopMessagesListening} from '../Redux/chat-reducer'
import {authSelector, chatSelector} from '../../selectors/selectors'
import p from '../Profile/Profile.module.css'
import {AddMessage} from '../Dialogs/AddMessage'
import {Message} from '../Dialogs/MessageField/Message'

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

export default ChatPage