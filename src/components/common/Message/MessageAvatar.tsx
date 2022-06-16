import s from './Message.module.css'
import {FC} from 'react'

type PropsType = {
    ava: string
}

export const MessageAvatar: FC<PropsType> = ({ava}) => {
    return <div className={s.message_block__ava}>
        <img src={ava} alt={'ava'}/>
    </div>
}
