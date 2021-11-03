import {ChangeEvent, useState} from 'react'


function TextareaField() {
    const [text, setText] = useState('')
    const setTextToState = (e: ChangeEvent<HTMLTextAreaElement>) => setText(e.currentTarget.value)

    return <>
        <div>
            <textarea onChange={setTextToState} value={text}></textarea>
        </div>
        <div>
            <button>Add message</button>
        </div>
    </>
}

export default TextareaField