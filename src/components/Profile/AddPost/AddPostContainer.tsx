import React from 'react'
import Posts from './Posts/Posts'
import {ActionsTypes, PostType, StateType} from '../../Redux/store'
import {addCurrentValueAC, addPostAC} from '../../Redux/profile-reducer'
import AddPost from './AddPost'

type AddPostPropsType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
}

function AddPostContainer(props: AddPostPropsType) {

    const setCurrentTextValueToState = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        return props.dispatch(addCurrentValueAC(e.currentTarget.value))
    }
    const posts = props.state.profilePage.messagesData.map((el: PostType) => <Posts key={el.id} post={el.message}
                                                                                    likes={el.likes}/>)
    const addPost = () => props.dispatch(addPostAC())

    return <AddPost />
}

export default AddPostContainer