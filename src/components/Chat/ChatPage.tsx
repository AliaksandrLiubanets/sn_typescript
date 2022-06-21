import {FC, useEffect, useState} from 'react'
import {MessageText} from '../common/Message/MessageText'
import {MessageAvatar} from '../common/Message/MessageAvatar'
import {MessageAuthor} from '../common/Message/MessageAuthor'
import s from '../common/Message/Message.module.css'
// import {AddMessage} from '../Dialogs/AddMessage'

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

const ChatPage: FC = () => {
    return <div>
        <Chat/>
    </div>
}

const Chat: FC = () => {
    let [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

    useEffect(() => {
        let ws: WebSocket
        const closeHandler = () => {
            console.log('Close WS')
            setTimeout(createChannel, 3000)
        }

        function createChannel() {
            ws?.removeEventListener('close', closeHandler)
            ws?.close()
            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            ws.addEventListener('close', closeHandler)
            setWsChannel(ws)
        }

        createChannel()

        return () => {
            ws.removeEventListener('close', closeHandler)
            ws.close()
        }
    }, [])

    useEffect(() => {

    }, [wsChannel])

    return <div>
        <Messages wsChannel={wsChannel}/>
        {/*<AddMessage addMessage={} text={} setCurrentValue={} url={} author={}/>*/}
        <AddMessage wsChannel={wsChannel}/>

    </div>
}

export const Messages: FC<{ wsChannel: WebSocket | null }> = ({wsChannel}) => {

    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        const messageHandler = (e: MessageEvent) => {
            const newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        }
        wsChannel?.addEventListener('message', messageHandler)

        return () => {
            wsChannel?.removeEventListener('message', messageHandler)
        }
    }, [wsChannel])

    return <div style={{'height': '400px', 'overflowY': 'auto'}}>
        {messages.map((m, index) => <Message message={m} key={index}/>)}
    </div>
}

type MessageType = { message: ChatMessageType }

export const Message: FC<MessageType> = ({message}) => {

    return <div className={s.message_block}>
        <div className={s.ava_name_message}>
            <MessageAvatar url={message.photo}/>
            <MessageAuthor author={message.userName}/>
        </div>
        <div className={s.angle}></div>
        <MessageText text={message.message}/>
    </div>
}


export const AddMessage: FC<{ wsChannel: WebSocket | null }> = ({wsChannel}) => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    useEffect(() => {
        let openHandler = () => {
            setReadyStatus('ready')
        }

        wsChannel?.addEventListener('open', openHandler)

        return () => {
            wsChannel?.removeEventListener('open', openHandler)
        }
    }, [wsChannel])

    const sendMessage = () => {
        if (!message) {
            return
        }
        wsChannel?.send(message)
        setMessage('')
    }

    return <div>
        <textarea value={message} onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
        <button disabled={wsChannel === null || readyStatus !== 'ready'} onClick={sendMessage}>Submit</button>
    </div>
}

export default ChatPage