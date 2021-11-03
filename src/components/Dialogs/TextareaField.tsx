import {ChangeEvent} from 'react'
import {StateType} from '../Redux/state'

type TextareaPropsType = {
    textareaCurrentValue: string
    // addPostText: (text:string) => StateType
    setCurrentTextValue: (text:string) => StateType
}

function TextareaField(props: TextareaPropsType) {

    return <>
        <div>
            <textarea onChange={(e: ChangeEvent<HTMLTextAreaElement>) => props.setCurrentTextValue(e.currentTarget.value)} value={props.textareaCurrentValue}></textarea>
        </div>
        <div>
            <button >Add message</button>
        </div>
    </>
}

export default TextareaField