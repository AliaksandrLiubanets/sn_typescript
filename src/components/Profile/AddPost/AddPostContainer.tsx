import React from 'react'
import {addCurrentValueAC, addPostAC, PostType} from '../../Redux/profile-reducer'
import AddPost from './AddPost'
import {Dispatch} from 'redux'
import {connect} from 'react-redux'
import {RootStateType} from '../../Redux/redux-store'

type PropsType = MapDispatchPropsType & MapStatePropsType

function AddPostContainer(props: PropsType) {

    return <AddPost setCurrentText={props.setCurrentText}
                    messagesData={props.messagesData}
                    addPost={props.addPost}
                    value={props.textareaCurrentValue}
    />
}

type MapStatePropsType = {
    textareaCurrentValue: string
    messagesData: Array<PostType>
}

type MapDispatchPropsType = {
    setCurrentText: (text: string) => void
    addPost: () => void
}

const mapStatToProps = (state: RootStateType): MapStatePropsType => {
    return {
        textareaCurrentValue: state.profilePage.textareaCurrentValue,
        messagesData: state.profilePage.messagesData
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: () => dispatch(addPostAC()),
        setCurrentText: text => dispatch(addCurrentValueAC(text))
    }
}

export default connect(mapStatToProps, mapDispatchToProps)(AddPostContainer)