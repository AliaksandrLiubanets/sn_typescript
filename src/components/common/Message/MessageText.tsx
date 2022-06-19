import s from './Message.module.css'
import {FC} from 'react'

type PropsType = {
    text: string
}

export const MessageText: FC<PropsType> = ({text}) => {
    return <div className={s.message_block__message}>
        {text}
    </div>
}