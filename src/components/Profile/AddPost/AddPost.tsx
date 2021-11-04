import React from 'react'
import Posts from './Posts/Posts'
import s from './AddPost.module.css'
import {PostType, StateType} from '../../Redux/state'

type AddPostPropsType = {
    state: StateType
    addPostText: () => void
    setCurrentTextValue: (text: string) => void
}

function AddPost(props: AddPostPropsType) {

    const setCurrentTextValueToState = (e: React.ChangeEvent<HTMLTextAreaElement>) => props.setCurrentTextValue(e.currentTarget.value)

    return <div className={s.addPost}>
        <div>My posts:</div>
        <textarea onChange={setCurrentTextValueToState} value={props.state.textareaCurrentValue}></textarea>
        <button onClick={props.addPostText}>Add post</button>
        {props.state.profilePage.messagesData.map((el: PostType) => <Posts key={el.id} post={el.message} likes={el.likes}/>)}
    </div>
}

export default AddPost