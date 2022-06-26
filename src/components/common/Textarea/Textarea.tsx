import React, {ChangeEvent, FC} from 'react'
import s from './Textarea.module.css'

type TextareaProps = Partial<HTMLTextAreaElement> & {
    setMessage: (value: string) => void
    onEnterPress?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void

}

export const Textarea: FC<TextareaProps> = ({setMessage, ...props}) => {

const onChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.currentTarget.value)

    return  <div>
                <textarea className={s.textarea__textarea}
                          onChange={onChangeValue}
                          value={props.value}
                          placeholder={props.placeholder}
                          onKeyPress={props.onEnterPress}
                >
                </textarea>
    </div>
}