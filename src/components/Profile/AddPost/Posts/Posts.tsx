import React, {useState} from 'react'
import emptyAvatar from '../../../../assets/empty_avatar.jpg'
import likeImage from '../../../../assets/like.png'

import s from './Posts.module.css'

type PostsPropsType = {
    post: string
    likes: number
    avatar: string | null
}

function Posts(props: PostsPropsType) {

    let [like, setLike] = useState<number>(props.likes)

    const setLikesCount = () => {
        setLike(() => ++like)
    }

    return <div className={s.post}>
        <img className={s.samuraiImage} src={props.avatar ? props.avatar : emptyAvatar} alt={'avatar'}/>
        <span className={s.postSpan}>{props.post}</span>
        <div className={s.likesBlock}>
            <span><img onClick={setLikesCount} className={s.likeImage} src={likeImage} alt={'like'}/></span>
            <span className={s.likesCount}>{like}</span>
        </div>
    </div>
}

export default Posts