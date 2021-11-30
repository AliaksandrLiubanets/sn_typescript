import {ChangeEvent} from 'react'
import s from './TextareaField.module.css'
import ava_me from '../../assets/ava_me.jpg'

type PropsType = {
    textareaCurrentValue: string | undefined
    setCurrentValue: (text: string) => void
    addDialogPost: () => void
}

function AddDialogPost(props: PropsType) {

    const setCurrentValueToState = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.setCurrentValue(e.currentTarget.value)
    }
    const addPostDialog = () => {
        props.addDialogPost()
    }

    return <div className={s.textarea}>
        <div className={s.textarea__ava}>
            <img src={ava_me} alt=""/>
        </div>
        <div>
            <textarea className={s.textarea__textarea}
                      onChange={setCurrentValueToState}
                      value={props.textareaCurrentValue}>
            </textarea>
        </div>
        <div className={s.textarea__button}>
            <button onClick={addPostDialog}>Send</button>
        </div>
    </div>
}

export default AddDialogPost