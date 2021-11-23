import {ChangeEvent} from 'react'
import s from './TextareaField.module.css'
import ava_me from '../../assets/ava_me.jpg'
import {ActionsTypes} from '../Redux/store'
import {addCurrentValueDialogAC, addPostDialogAC} from '../Redux/dialogs-reducer'

type TextareaPropsType = {
    textareaCurrentValue: string
    dispatch: (action: ActionsTypes) => void
    name: string | undefined
}

function TextareaField(props: TextareaPropsType) {

    const setCurrentValueToState = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(addCurrentValueDialogAC(e.currentTarget.value))
    }
    const AddPostDialog = () => {
        props.name && props.dispatch(addPostDialogAC(props.name))
    }

    return <div className={s.textarea}>
        <div className={s.textarea__ava}>
            <img src={ava_me} alt=""/>
        </div>
        <div>
            <textarea className={s.textarea__textarea} onChange={setCurrentValueToState}
                      value={props.textareaCurrentValue}></textarea>
        </div>
        <div className={s.textarea__button}>
            <button onClick={AddPostDialog}>Send</button>
        </div>
    </div>
}

export default TextareaField