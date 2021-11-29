import {ActionsTypes} from '../Redux/store'
import {addCurrentValueDialogAC, addPostDialogAC} from '../Redux/dialogs-reducer'
import AddDialogPost from './AddDialogPost'

type PropsType = {
    textareaCurrentValue: string
    dispatch: (action: ActionsTypes) => void
    name: string | undefined
}

function AddDialogPostContainer(props: PropsType) {

    const setCurrentValueToState = (text: string) => {
        props.dispatch(addCurrentValueDialogAC(text))
    }
    const addDialogPost = () => {
        props.name && props.dispatch(addPostDialogAC(props.name))
    }

    return <AddDialogPost addDialogPost={addDialogPost}
                          setCurrentValue={setCurrentValueToState}
                          textareaCurrentValue={props.textareaCurrentValue}
    />
}

export default AddDialogPostContainer