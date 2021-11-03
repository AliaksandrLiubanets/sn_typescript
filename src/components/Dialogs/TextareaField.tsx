import {ChangeEvent, useState} from 'react'


function TextareaField() {
    const [text, setText] = useState('')

    return <>
        <div>
            <textarea onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.currentTarget.value)} value={text}></textarea>
        </div>
        <div>
            <button>Add message</button>
        </div>

    </>
}

export default TextareaField