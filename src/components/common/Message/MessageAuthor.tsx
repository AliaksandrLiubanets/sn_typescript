import s from './Message.module.css'
import {FC} from 'react'

type PropsType = {
    author: string
}

export const MessageAuthor: FC<PropsType> = ({author}) => {
    return <div className={s.message_block__name}>
        {author}
    </div>
}
