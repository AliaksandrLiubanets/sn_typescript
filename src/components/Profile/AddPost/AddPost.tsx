import React from 'react'
import Posts from './Posts/Posts'
import s from './AddPost.module.css'
import {PostType} from '../../Redux/profile-reducer'
import {Textarea} from '../../common/Textarea/Textarea'
import {Button} from '../../common/Button/Button'

type AddPostPropsType = {
    setCurrentText: (text: string) => void
    messagesData: Array<PostType>
    addPost: () => void
    value: string
    avatar: string | null
}

function AddPost(props: AddPostPropsType) {

    const setCurrentTextToState = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.setCurrentText(e.currentTarget.value)
    }
    const posts = props.messagesData.map((el: PostType) => <Posts key={el.id}
                                                                  post={el.message}
                                                                  likes={el.likes}
                                                                  avatar={props.avatar} />)
    const addPost = () => props.addPost()
    const onEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => e.key === 'Enter' && props.addPost()

    return <div className={s.addPost}>
        <div className={s.myPosts}>
            My posts:
        </div>
        <div className={s.textarea}>
            <Textarea onChangeValue={setCurrentTextToState}
                      onEnterPress={onEnter}
                      value={props.value}
            />
            <Button label={'Add'} onClickHandler={addPost} />
        </div>
        {posts}
    </div>
}

export default AddPost