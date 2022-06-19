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
}

export function AddMessage(props: PropsType) {

    return <div className={`${s.textarea} ${s.left__padding}`}>
        <div className={s.textarea__ava}>
            <img src={props.url ? props.url : emptyAvatar} alt=""/>
        </div>
        <Textarea onChangeValue={props.setCurrentValue} value={props.text} onEnterPress={props.onEnter && props.onEnter}/>
        <Button label={'Send'} onClickHandler={props.addMessage}/>
    </div>
}

export default AddMessage