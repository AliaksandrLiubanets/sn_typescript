import React from 'react'
import Posts from './Posts/Posts'
import s from './AddPost.module.css'
import {ActionsTypes, PostType, StateType} from '../../Redux/store'
import {addCurrentValueAC, addPostAC} from '../../Redux/profile-reducer'

type AddPostPropsType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
}

function AddPost(props: AddPostPropsType) {

    const setCurrentTextValueToState = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        return props.dispatch(addCurrentValueAC(e.currentTarget.value))
    }
    const posts = props.state.profilePage.messagesData.map((el: PostType) => <Posts key={el.id} post={el.message}
                                                                                    likes={el.likes}/>)

    const addPost = () => props.dispatch(addPostAC())

    return <div className={s.addPost}>
        <div>My posts:</div>
        <div className={s.textarea}>
            <div>
                <textarea className={s.textarea__textarea} onChange={setCurrentTextValueToState}
                           value={props.state.profilePage.textareaCurrentValue}>
                </textarea></div>
            <div className={s.textarea__button}>
                <button onClick={addPost}>Add</button>
            </div>
        </div>
        {posts}
    </div>
}

export default AddPost