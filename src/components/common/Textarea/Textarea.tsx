import React, {FC} from 'react'
import s from './Textarea.module.css'

type TextareaProps = Partial<HTMLTextAreaElement> & {
    onChangeValue?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    onEnterPress?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void

}

export const Textarea: FC<TextareaProps> = ({onChangeValue, ...props}) => {



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