import s from './Message.module.css'
import {FC} from 'react'

type PropsType = {
    name: string
}

export const MessageAuthor: FC<PropsType> = ({name}) => {
    return <div className={s.message_block__name}>
        {name}
    </div>
}
