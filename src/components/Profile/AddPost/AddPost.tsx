import React from 'react'
import Posts from './Posts/Posts'
import s from './AddPost.module.css'
import {PostType} from '../../Redux/profile-reducer'
import {Textarea} from '../../common/Preloader/Textarea'
import {Button} from '../../common/Preloader/Button'

type AddPostPropsType = {
    setCurrentText: (text: string) => void
    messagesData: Array<PostType>
    addPost: () => void
    value: string
}

function AddPost(props: AddPostPropsType) {

    const setCurrentTextToState = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.setCurrentText(e.currentTarget.value)
    }
    const posts = props.messagesData.map((el: PostType) => <Posts key={el.id} post={el.message}
                                                                  likes={el.likes}/>)
    const addPost = () => props.addPost()

    return <div className={s.addPost}>
        <div>My posts:</div>
        <div className={s.textarea}>
            <Textarea setCurrentText={setCurrentTextToState} value={props.value} />
            <Button label={'Add'} onClickHandler={addPost} />
        </div>
        {posts}
    </div>
}

export default AddPost