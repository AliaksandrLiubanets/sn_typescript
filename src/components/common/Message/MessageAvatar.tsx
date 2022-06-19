import s from './Message.module.css'
import {FC} from 'react'

type PropsType = {
    url: string
}

export const MessageAvatar: FC<PropsType> = ({url}) => {
    return <div className={s.message_block__ava}>
        <img src={url} alt={'ava'}/>
    </div>
}
