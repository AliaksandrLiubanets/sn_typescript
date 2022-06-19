import s from '../../common/Message/Message.module.css'
import {FC} from 'react'
import {MessageAvatar} from '../../common/Message/MessageAvatar'
import {MessageAuthor} from '../../common/Message/MessageAuthor'
import {MessageText} from '../../common/Message/MessageText'
import {MessageType} from '../../Redux/dialogs-reducer'

type MessagePropsType = {
    message: MessageType
}

export const Message: FC<MessagePropsType> = ({message}) => {
    return <div className={s.message_block}>
        <div className={s.ava_name}>
            <MessageAvatar url={message.url}/>
            <MessageAuthor author={message.author}/>
        </div>
        <div className={s.angle}></div>
        <MessageText text={message.text}/>
    </div>
}