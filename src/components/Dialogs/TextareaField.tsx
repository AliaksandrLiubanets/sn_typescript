import {ChangeEvent} from 'react'
import {setCurrentTextValueInDialog, StateType} from '../Redux/state'

type TextareaPropsType = {
    textareaCurrentValue: string
    setCurrentTextValueInDialog: (text:string) => void
}

function TextareaField(props: TextareaPropsType) {
    return <>
        <div>
            <textarea onChange={(e: ChangeEvent<HTMLTextAreaElement>) => props.setCurrentTextValueInDialog(e.currentTarget.value)} value={props.textareaCurrentValue}></textarea>
        </div>
        <div>
            <button>Add message</button>
        </div>
    </>
}

export default TextareaField