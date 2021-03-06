import React, {useState} from 'react'
import s from './TextareaField.module.css'
import {Textarea} from '../common/Textarea/Textarea'
import {Button} from '../common/Button/Button'
import {Avatar} from '../common/Avatar/Avatar'

type PropsType = {
    addMessage: (message: string) => void
    url: string | null
    author?: string
    isOnEnterPress?: boolean
    padding?: boolean
    disabled?: boolean
}

export const AddMessage = (props: PropsType) => {
    const [message, setMessage] = useState('')

    const textarea_style = `${s.textarea} ${props.padding && s.padding}`
    const disabaled = props.disabled ? props.disabled : false

    return <div className={textarea_style}>
        <Avatar url={props.url}/>
        <Textarea setMessage={setMessage}
                  value={message}
                  isOnEnterPress={props.isOnEnterPress}
                  addMessage={props.addMessage}
        />
        <Button disabled={disabaled}
                label={'Send'}
                onClickSubmit={props.addMessage}
                message={message}
                setMessage={setMessage}
        />
    </div>
}

