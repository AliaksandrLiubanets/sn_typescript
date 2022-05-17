import React from 'react'
import {PostType, profileActions} from '../../Redux/profile-reducer'
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
                    avatar={props.avatar}
    />
}

type MapStatePropsType = {
    textareaCurrentValue: string
    messagesData: Array<PostType>
    avatar: string | null
}

type MapDispatchPropsType = {
    setCurrentText: (text: string) => void
    addPost: () => void
}

const mapStatToProps = (state: RootStateType): MapStatePropsType => {
    return {
        textareaCurrentValue: state.profilePage.textareaCurrentValue,
        messagesData: state.profilePage.messagesData,
        avatar: state.profilePage.profile && state.profilePage.profile.photos.small,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: () => dispatch(profileActions.addPost()),
        setCurrentText: text => dispatch(profileActions.addCurrentValue(text))
    }
}

export default connect(mapStatToProps, mapDispatchToProps)(AddPostContainer)