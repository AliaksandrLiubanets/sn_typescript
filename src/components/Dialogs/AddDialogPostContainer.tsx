import {dialogsActions} from '../Redux/dialogs-reducer'
import AddDialogPost from './AddDialogPost'
import {connect} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'
import {Dispatch} from 'redux'

type OwnPropsType = {
    name: string
}

type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

function AddDialogContainer(props: PropsType) {

    return <AddDialogPost addDialogPost={props.addDialogPost}
                          setCurrentValue={props.setCurrentValue}
                          textareaCurrentValue={props.textareaCurrentValue}
                          name={props.name}
                          ava={props.ava}
    />
}

type MapStatePropsType = {
    textareaCurrentValue: string
    ava: string | null
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        textareaCurrentValue: state.dialogsPage.textareaCurrentValue,
        ava: state.auth.ownAvatar
    }
}

type MapDispatchPropsType = {
    addDialogPost: (name: string) => void
    setCurrentValue: (text: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addDialogPost: (name) => {
            dispatch(dialogsActions.addPostDialog(name))
        },
        setCurrentValue: text => {
            dispatch(dialogsActions.addCurrentValueDialog(text))
        }
    }
}

export const AddDialogPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddDialogContainer)