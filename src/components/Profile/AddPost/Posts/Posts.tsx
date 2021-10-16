import React from "react";
import samurai from '../../../../assets/samurai_ava.jpg'
import s from './Posts.module.css'

type PostsPropsType = {
    post: string
    likes: number
}

function Posts(props: PostsPropsType) {
    return <div className={s.post}>
        <img src={samurai} alt={'samurai'}/>
        <span className={s.postSpan}>{props.post}</span>
        <div>
            <span>likes </span><span>{props.likes}</span>
        </div>

    </div>
}

export default Posts