import {ChangeEvent} from 'react'
import s from './TextareaField.module.css'
import ava_me from '../../assets/ava_me.jpg'

type TextareaPropsType = {
    textareaCurrentValue: string
    setCurrentTextValueInDialog: (text: string) => void
    AddPostDialog: () => void
}

function TextareaField(props: TextareaPropsType) {


    const setCurrentValueToState = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.setCurrentTextValueInDialog(e.currentTarget.value)
    }

    return <div className={s.textarea}>
        <div className={s.textarea__ava}>
            <img src={ava_me} alt=""/>
        </div>
        <div>
            <textarea rows={1} className={s.textarea__textarea} onChange={setCurrentValueToState}
                      value={props.textareaCurrentValue}></textarea>
        </div>
        <div className={s.textarea__button}>
            <button onClick={props.AddPostDialog}>Send</button>
        </div>
    </div>
}

export default TextareaField