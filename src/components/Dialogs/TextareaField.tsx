import {ChangeEvent} from 'react'

type TextareaPropsType = {
    textareaCurrentValue: string
    setCurrentTextValueInDialog: (text:string) => void
    AddPostDialog: () => void
}

function TextareaField(props: TextareaPropsType) {


    const setCurrentValueToState = (e: ChangeEvent<HTMLTextAreaElement>) => props.setCurrentTextValueInDialog(e.currentTarget.value)

    return <>
        <div>
            <textarea onChange={setCurrentValueToState} value={props.textareaCurrentValue}></textarea>
        </div>
        <div>
            <button onClick={props.AddPostDialog}>Add message</button>
        </div>
    </>
}

export default TextareaField