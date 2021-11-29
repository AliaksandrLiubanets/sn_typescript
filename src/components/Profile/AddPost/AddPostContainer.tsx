import React from 'react'
import {ActionsTypes, StateType} from '../../Redux/store'
import {addCurrentValueAC, addPostAC} from '../../Redux/profile-reducer'
import AddPost from './AddPost'
import {Store} from 'redux'

type AddPostPropsType = {
    store: Store
}

function AddPostContainer(props: AddPostPropsType) {

    const setCurrentTextValueToState = (text: string) => {
        return props.store.dispatch.bind(props.store)(addCurrentValueAC(text))
    }

    const addPost = () => props.store.dispatch.bind(props.store)(addPostAC())

    return <AddPost setCurrentText={setCurrentTextValueToState}
                    messagesData={props.store.getState().profilePage.messagesData}
                    addPost={addPost}
                    value={props.store.getState().profilePage.textareaCurrentValue}
    />
}

export default AddPostContainer