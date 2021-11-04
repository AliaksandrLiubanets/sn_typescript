import {ChangeEvent} from 'react'

type TextareaPropsType = {
    textareaCurrentValue: string
    setCurrentTextValueInDialog: (text:string) => void
}

function TextareaField(props: TextareaPropsType) {

    const setCurrentValueToState = (e: ChangeEvent<HTMLTextAreaElement>) => props.setCurrentTextValueInDialog(e.currentTarget.value)

    return <>
        <div>
            <textarea onChange={setCurrentValueToState} value={props.textareaCurrentValue}></textarea>
        </div>
        <div>
            <button>Add message</button>
        </div>
    </>
}

export default TextareaField