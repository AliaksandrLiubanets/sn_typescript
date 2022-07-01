import React from 'react'
import Posts from './Posts/Posts'
import s from '../../Dialogs/TextareaField.module.css'
import {PostType} from '../../Redux/profile-reducer'
import {Messages} from '../../common/Message/Messages'
import {AddMessage} from '../../Dialogs/AddMessage'

type AddPostPropsType = {
    messagesData: Array<PostType>
    addPost: (message: string) => void
    avatar: string | null
}

export const AddPost = (props: AddPostPropsType) => {

    const posts = props.messagesData.map((el: PostType) => <Posts key={el.id}
                                                                  post={el.message}
                                                                  likes={el.likes}
                                                                  avatar={props.avatar}/>)
    const addPost = (message: string) => props.addPost(message)

    return <div className={s.addPost}>
        <div className={s.myPosts}>
            My posts:
        </div>
        <AddMessage addMessage={addPost}
                    url={props.avatar}
                    isOnEnterPress
        />
        <Messages messages={posts}/>
    </div>
}