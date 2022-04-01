import React, {FC} from 'react'
import s from './Textarea.module.css'

type TextareaProps = {
    setCurrentText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    value: string
}

export const Textarea: FC<TextareaProps> = ({setCurrentText, value, ...props}) => {

    return  <div>
                <textarea className={s.textarea__textarea}
                          onChange={setCurrentText}
                          value={value}>
                </textarea>
    </div>
}