import s from './Message.module.css'
import React, {FC} from 'react'

type PropsType = {
    text: string
}

export const MessageText: FC<PropsType> = ({text}) => {
    return <div className={s.block}>
        <div className={s.angle}></div>
        <div className={s.message_block__message}>
            {text}
        </div>
    </div>
}