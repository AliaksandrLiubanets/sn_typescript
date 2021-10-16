import React from "react";
import samurai from '../../../../assets/samurai_ava.jpg'
import s from './Posts.module.css'

function Posts() {
    return <div className={s.post}>
            <img src={samurai} alt={'samurai'}/>
        <span>hello</span>
    </div>
}

export default Posts