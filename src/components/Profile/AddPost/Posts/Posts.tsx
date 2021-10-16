import React from "react";
import samurai from '../../../../assets/samurai_ava.jpg'
import s from './Posts.module.css'

type PostsPropsType = {
    post: string
}

function Posts(props: PostsPropsType) {
    return <div className={s.post}>
        <img src={samurai} alt={'samurai'}/>
        <span>{props.post}</span>
    </div>
}

export default Posts