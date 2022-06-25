import React, {FC} from 'react'

type TextareaProps = {
    label: string
    onClickSubmit?: (message: string) => void
    onClickHandler?: () => void
    setMessage?: (message: string) => void
    disabled?: boolean
    message?: string
}

export const Button: FC<TextareaProps> = ({onClickSubmit,
                                              label,
                                              disabled,
                                              message,
                                              setMessage,
                                              onClickHandler}) => {

    const onSubmit = () => {
        onClickHandler && onClickHandler()
        onClickSubmit && onClickSubmit(message ? message : '')
        setMessage && setMessage('')
    }

    return  <div>
        <button disabled={disabled} onClick={onSubmit}>{label}</button>
    </div>
}