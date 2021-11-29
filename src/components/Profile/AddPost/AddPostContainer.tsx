import React from 'react'
import {ActionsTypes, StateType} from '../../Redux/store'
import {addCurrentValueAC, addPostAC} from '../../Redux/profile-reducer'
import AddPost from './AddPost'

type AddPostPropsType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
}

function AddPostContainer(props: AddPostPropsType) {

    const setCurrentTextValueToState = (text: string) => {
        return props.dispatch(addCurrentValueAC(text))
    }

    const addPost = () => props.dispatch(addPostAC())

    return <AddPost setCurrentText={setCurrentTextValueToState}
                    messagesData={props.state.profilePage.messagesData}
                    addPost={addPost}
                    value={props.state.profilePage.textareaCurrentValue}
    />
}

export default AddPostContainer