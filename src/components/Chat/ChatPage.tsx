import {FC, useEffect, useState} from 'react'
import {MessageText} from '../common/Message/MessageText'
import {MessageAvatar} from '../common/Message/MessageAvatar'
import {MessageAuthor} from '../common/Message/MessageAuthor'
import s from '../common/Message/Message.module.css'
// import {AddMessage} from '../Dialogs/AddMessage'

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

const ChatPage: FC = () => {
    return <div>
        <Chat />
    </div>
}

const Chat: FC = () => {

    return <div>
        <Messages  />
        {/*<AddMessage addMessage={} text={} setCurrentValue={} url={} author={}/>*/}
        <AddMessage />

    </div>
}

export const Messages: FC = () => {

    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        wsChannel.addEventListener('message', (e: MessageEvent) => {
            const newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [])

    return <div style={{'height': '400px', 'overflowY': 'auto'}}>
        { messages.map((m, index) => <Message message={m} key={index} />) }
    </div>
}

type MessageType = {message: ChatMessageType}

export const Message: FC<MessageType> = ({message}) => {

    return <div className={s.message_block}>
        <div className={s.ava_name_message}>
            <MessageAvatar url={message.photo}/>
            <MessageAuthor author={message.userName}/>
        </div>
        <div className={s.angle}></div>
        <MessageText text={message.message} />
    </div>
}


export const AddMessage: FC = () => {
    return <div>
        <textarea></textarea>
        <button>Submit</button>
    </div>
}

export default ChatPage