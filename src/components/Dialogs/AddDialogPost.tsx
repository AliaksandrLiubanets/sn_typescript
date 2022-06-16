import React, {ChangeEvent} from 'react'
import s from './TextareaField.module.css'
import emptyAvatar from '../../assets/empty_avatar.jpg'
import {Textarea} from '../common/Textarea/Textarea'
import {Button} from '../common/Button/Button'

type PropsType = {
    textareaCurrentValue: string
    setCurrentValue: (text: string) => void
    addDialogPost: (name: string) => void
    name: string
    ava: string | null
}

export function AddDialogPost(props: PropsType) {

    const setCurrentValueToState = (e: ChangeEvent<HTMLTextAreaElement>) => props.setCurrentValue(e.currentTarget.value)
    const addPostDialog = () => props.addDialogPost(props.name)
    const onEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => e.key === 'Enter' && props.addDialogPost(props.name)

    return <div className={s.textarea}>
        <div className={s.textarea__ava}>
            <img src={props.ava ? props.ava : emptyAvatar} alt=""/>
        </div>
        <Textarea onChangeValue={setCurrentValueToState} value={props.textareaCurrentValue} onEnterPress={onEnter}/>
        <Button label={'Send'} onClickHandler={addPostDialog}/>
    </div>
}

export default AddDialogPost