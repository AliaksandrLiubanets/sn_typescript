import {FC} from 'react'

type PropsType = {
    message: '' | JSX.Element[] | undefined
}

export const Messages: FC<PropsType> = ({message}) => {

    return <div className={''}>
        {message}
    </div>
}