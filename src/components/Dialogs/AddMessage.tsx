import React, {ChangeEvent} from 'react'
import s from './TextareaField.module.css'
import emptyAvatar from '../../assets/empty_avatar.jpg'
import {Textarea} from '../common/Textarea/Textarea'
import {Button} from '../common/Button/Button'

type PropsType = {
    text: string
    setCurrentValue: (e: ChangeEvent<HTMLTextAreaElement>) => void
    addMessage: () => void
    url: string | null
    author?: string
    onEnter?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
    padding?: boolean
}

export const AddMessage = (props: PropsType) => {

    const textarea_style = `${s.textarea} ${props.padding && s.left__padding}`

    return <div className={textarea_style}>
        <div className={s.textarea__ava}>
            <img src={props.url ? props.url : emptyAvatar} alt=""/>
        </div>
        <Textarea onChangeValue={props.setCurrentValue} value={props.text} onEnterPress={props.onEnter && props.onEnter}/>
        <Button label={'Send'} onClickHandler={props.addMessage}/>
    </div>
}