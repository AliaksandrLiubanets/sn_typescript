import {addCurrentValueDialogAC, addPostDialogAC} from '../Redux/dialogs-reducer'
import AddDialogPost from './AddDialogPost'
import {connect} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'
import {Dispatch} from 'redux'

type OwnPropsType = {
    // name: string | undefined
    name: string
}

type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

function AddDialogContainer(props: PropsType) {

    // const setCurrentValueToState = (text: string) => {
    //     store?.dispatch(addCurrentValueDialogAC(text))
    // }
    // const addDialogPost = () => {
    //     props.name && store?.dispatch(addPostDialogAC(props.name))
    // }


    return <AddDialogPost addDialogPost={props.addDialogPost}
                          setCurrentValue={props.setCurrentValue}
                          textareaCurrentValue={props.textareaCurrentValue}
                          name={props.name}
    />
}

type MapStatePropsType = {
    textareaCurrentValue: string
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        textareaCurrentValue: state.dialogsPage.textareaCurrentValue
    }
}

type MapDispatchPropsType = {
    addDialogPost: (name: string) => void
    setCurrentValue: (text: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addDialogPost: (name) => {
            dispatch(addPostDialogAC(name))
        },
        setCurrentValue: text => {
            dispatch(addCurrentValueDialogAC(text))
        }
    }
}

export const AddDialogPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddDialogContainer)