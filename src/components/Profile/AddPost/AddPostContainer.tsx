import React from 'react'
import {addCurrentValueAC, addPostAC} from '../../Redux/profile-reducer'
import AddPost from './AddPost'
import {Store} from 'redux'
import {connect} from 'react-redux'
import {RootStateType} from '../../Redux/redux-store'

type AddPostPropsType = {

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

type MapStatePropsType = {
    value: string
    messagesData:
}

const mapStatToProps = (state: RootStateType): MapStatePropsType => {
    return {
        value
    }
}

export default connect(mapStatToProps, mapDispatchToProps)(AddPostContainer)