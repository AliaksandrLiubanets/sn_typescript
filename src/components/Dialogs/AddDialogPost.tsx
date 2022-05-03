import {ChangeEvent} from 'react'
import s from './TextareaField.module.css'
import ava_me from '../../assets/ava_100px/ava_me.jpg'
import {Textarea} from '../common/Textarea/Textarea'
import {Button} from '../common/Button/Button'

type PropsType = {
    textareaCurrentValue: string
    setCurrentValue: (text: string) => void
    addDialogPost: (name: string) => void
    name: string
}

function AddDialogPost(props: PropsType) {

    const setCurrentValueToState = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.setCurrentValue(e.currentTarget.value)
    }
    const addPostDialog = () => {
        props.addDialogPost(props.name)
    }

    return <div className={s.textarea}>
        <div className={s.textarea__ava}>
            <img src={ava_me} alt=""/>
        </div>
        <Textarea setCurrentText={setCurrentValueToState} value={props.textareaCurrentValue} />
        <Button label={'Send'} onClickHandler={addPostDialog}/>
    </div>
}

export default AddDialogPost