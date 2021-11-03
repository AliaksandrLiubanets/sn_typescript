import React, {ChangeEvent, useState} from 'react'
import Posts from './Posts/Posts'
import s from './AddPost.module.css'
import {PostType} from '../../Redux/state'
import {v1} from 'uuid'

type AddPostPropsType = {
    massagesData: Array<PostType>
}

function AddPost(props: AddPostPropsType) {

    const [text, setText] = useState<string>('')
    const [stateMessages, setStateMessages] = useState<Array<PostType>>(props.massagesData)

    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => setText(e.currentTarget.value)

    const setTextToState = (text: string) => {
        let newPost: PostType
        newPost = {
            id: v1(),
            message: text,
            likes: 7
        }
        setStateMessages([...stateMessages, newPost])
        setText('')
    }

    return <div className={s.addPost}>
        <div>My posts:</div>
        <textarea onChange={onChangeText} value={text}></textarea>
        <button onClick={ () => setTextToState(text)}>Add post</button>
        {stateMessages.map((el: PostType) => <Posts key={el.id} post={el.message} likes={el.likes}/>)}
    </div>
}

export default AddPost