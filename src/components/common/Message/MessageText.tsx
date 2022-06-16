import s from './Message.module.css'
import {FC} from 'react'

type PropsType = {
    message: string
}

export const MessageText: FC<PropsType> = ({message}) => {
    return <div className={s.message_block__message}>
        {message}
    </div>
}