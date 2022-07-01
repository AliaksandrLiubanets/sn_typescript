import {FC} from 'react'

type PropsType = {
    messages: '' | JSX.Element[] | undefined
}

export const Messages: FC<PropsType> = ({messages}) => {

    return <div>
        {messages}
    </div>
}