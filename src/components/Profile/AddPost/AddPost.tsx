import React from 'react'
import Posts from './Posts/Posts'
import s from './AddPost.module.css'
import {PostType} from '../../Redux/profile-reducer'

type AddPostPropsType = {
    setCurrentText: (text: string) => void
    messagesData: Array<PostType>
    addPost: () => void
    value: string
}

function AddPost(props: AddPostPropsType) {

    const setCurrentTextToState = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        return props.setCurrentText(e.currentTarget.value)
    }
    const posts = props.messagesData.map((el: PostType) => <Posts key={el.id} post={el.message}
                                                                  likes={el.likes}/>)
    const addPost = () => props.addPost()

    return <div className={s.addPost}>
        <div>My posts:</div>
        <div className={s.textarea}>
            <div>
                <textarea className={s.textarea__textarea} onChange={setCurrentTextToState}
                          value={props.value}>
                </textarea></div>
            <div className={s.textarea__button}>
                <button onClick={addPost}>Add</button>
            </div>
        </div>
        {posts}
    </div>
}

export default AddPost