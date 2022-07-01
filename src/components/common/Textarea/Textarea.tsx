import React, {ChangeEvent, FC} from 'react'
import s from './Textarea.module.css'

type TextareaProps = Partial<HTMLTextAreaElement> & {
    setMessage: (value: string) => void
    addMessage?: (message: string) => void
    isOnEnterPress?: boolean
}

export const Textarea: FC<TextareaProps> = ({setMessage, ...props}) => {

    const onChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.currentTarget.value)
    const onEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            if (props.isOnEnterPress && props.value) {
                props.addMessage && props.addMessage(props.value)
            }
            setMessage('')
        }
    }

    return <div>
                <textarea className={s.textarea__textarea}
                          onChange={onChangeValue}
                          value={props.value}
                          placeholder={props.placeholder}
                          onKeyPress={onEnterPress}
                >
                </textarea>
    </div>
}