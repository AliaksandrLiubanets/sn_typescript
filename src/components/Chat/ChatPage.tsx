import {FC} from 'react'
import {MessageText} from '../common/Message/MessageText'
import {MessageAvatar} from '../common/Message/MessageAvatar'
import {MessageAuthor} from '../common/Message/MessageAuthor'
import emptyAvatar from '../../assets/empty_avatar.jpg'
import s from '../common/Message/Message.module.css'

const ChatPage: FC = () => {
    return <div>
        <Chat />
    </div>
}

const Chat: FC = () => {
    return <div>
        <Messages  />
        <AddMessage />
    </div>
}

export const Messages: FC = () => {
    const messages = [1,2,3,4,5,6,7,8]
    return <div className={s.messages}>
        { messages.map((m: any) => <Message key={m} />) }
    </div>
}

export const Message: FC = () => {
    const message = {
        url: emptyAvatar,
        author: 'Alex',
        text: 'Hey!'
    }
    return <div className={s.message_block}>
        <div className={s.ava_name_message}>
            <MessageAvatar ava={message.url}/>
            <MessageAuthor name={message.author}/>
        </div>
        <div className={s.angle}></div>
        <MessageText message={message.text} />
    </div>
}
export const AddMessage: FC = () => {
    return <div>
        <textarea></textarea>
        <button>Submit</button>
    </div>
}

export default ChatPage