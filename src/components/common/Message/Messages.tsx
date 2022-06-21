import {FC} from 'react'
import s from './Message.module.css'

type PropsType = {
    message: '' | JSX.Element[] | undefined
    scroll?: boolean
}

export const Messages: FC<PropsType> = ({message, scroll}) => {

    const messages__style = scroll ? `${s.scroll}` : ''

    return <div className={messages__style}>
        {message}
    </div>
}