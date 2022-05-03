import React, {FC} from 'react'

type TextareaProps = {
    label: string
    onClickHandler: () => void
}

export const Button: FC<TextareaProps> = ({onClickHandler, label, ...props}) => {

    return  <div>
        <button onClick={onClickHandler}>{label}</button>
    </div>
}