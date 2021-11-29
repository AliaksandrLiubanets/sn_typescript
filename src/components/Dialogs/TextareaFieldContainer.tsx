import {ActionsTypes} from '../Redux/store'
import {addCurrentValueDialogAC, addPostDialogAC} from '../Redux/dialogs-reducer'
import TextareaField from './TextareaField'

type PropsType = {
    textareaCurrentValue: string
    dispatch: (action: ActionsTypes) => void
    name: string | undefined
}

function TextareaFieldContainer(props: PropsType) {

    const setCurrentValueToState = (text: string) => {
        props.dispatch(addCurrentValueDialogAC(text))
    }
    const AddDialogPost = () => {
        props.name && props.dispatch(addPostDialogAC(props.name))
    }

    return <TextareaField addDialogPost={AddDialogPost}
                          setCurrentValue={setCurrentValueToState}
                          textareaCurrentValue={props.textareaCurrentValue}
    />
}

export default TextareaFieldContainer