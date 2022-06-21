import React from 'react'
import Posts from './Posts/Posts'
import s from '../../Dialogs/TextareaField.module.css'
import {PostType} from '../../Redux/profile-reducer'
import {Messages} from '../../common/Message/Messages'
import {AddMessage} from '../../Dialogs/AddMessage'

type AddPostPropsType = {
    setCurrentText: (text: string) => void
    messagesData: Array<PostType>
    addPost: () => void
    value: string
    avatar: string | null
}

export const AddPost = (props: AddPostPropsType) => {

    const setCurrentTextToState = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.setCurrentText(e.currentTarget.value)
    }
    const posts = props.messagesData.map((el: PostType) => <Posts key={el.id}
                                                                  post={el.message}
                                                                  likes={el.likes}
                                                                  avatar={props.avatar}/>)
    const addPost = () => props.addPost()
    const onEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => e.key === 'Enter' && props.addPost()

    return <div className={s.addPost}>
        <div className={s.myPosts}>
            My posts:
        </div>
        <AddMessage addMessage={addPost}
                    url={props.avatar}
                    setCurrentValue={setCurrentTextToState}
                    text={props.value}
                    onEnter={onEnter}
        />
        <Messages message={posts}/>
    </div>
}