import s from '../../common/Message/Message.module.css'
import {FC} from 'react'
import {MessageAvatar} from '../../common/Message/MessageAvatar'
import {MessageAuthor} from '../../common/Message/MessageAuthor'
import {MessageText} from '../../common/Message/MessageText'

type MessagePropsType = {
    message: string
    name: string
    ava: string
}

export const MessageField: FC<MessagePropsType> = (props) => {
    return <div className={s.message_block}>
        <div className={s.ava_name}>
            <MessageAvatar ava={props.ava}/>
            <MessageAuthor name={props.name}/>
        </div>
        <div className={s.angle}></div>
        <MessageText message={props.message}/>
    </div>
}