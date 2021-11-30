import {ActionsTypes} from '../Redux/store'
import {addCurrentValueDialogAC, addPostDialogAC} from '../Redux/dialogs-reducer'
import AddDialogPost from './AddDialogPost'
import {StoreContext} from '../../StoreContext/StoreContext'

type PropsType = {
    // textareaCurrentValue: string
    // dispatch: (action: ActionsTypes) => void
    name: string | undefined
}

function AddDialogPostContainer(props: PropsType) {


    return <StoreContext.Consumer>
        {store => {
            const setCurrentValueToState = (text: string) => {
                store?.dispatch(addCurrentValueDialogAC(text))
            }
            const addDialogPost = () => {
                props.name && store?.dispatch(addPostDialogAC(props.name))
            }
            return <AddDialogPost addDialogPost={addDialogPost}
                                  setCurrentValue={setCurrentValueToState}
                                  textareaCurrentValue={store?.getState().dialogsPage.textareaCurrentValue}
            />
        }}
    </StoreContext.Consumer>
}

export default AddDialogPostContainer