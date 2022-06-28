import s from '../../common/Message/Message.module.css'
import React, {FC} from 'react'
import {MessageAvatar} from '../../common/Message/MessageAvatar'
import {MessageAuthor} from '../../common/Message/MessageAuthor'
import {MessageText} from '../../common/Message/MessageText'
import {ChatMessageAPIType} from '../../../api/chat-api'

type MessageType = {
    message: ChatMessageAPIType
}

export const Message: FC<MessageType> = React.memo(({message}) => {

    return <div className={s.message_block}>
        <div className={s.ava_name_message}>
            <MessageAvatar url={message.photo}/>
            <MessageAuthor author={message.userName}/>
        </div>

        <MessageText text={message.message}/>
    </div>
})