import React from "react";
import s from './Profile.module.css'
import AddPost from './AddPost/AddPost'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {v1} from 'uuid'

export type PostType = {
    id: string
    message: string
    likes: number
}

const massagesData:Array<PostType> = [
    {id: v1(), message: 'hello!', likes: 3},
    {id: v1(), message: 'Hi!', likes: 5},
    {id: v1(), message: 'How is it going?!', likes: 8}
]

function Profile() {
    return <div className={s.content} >
        <ProfileInfo />
        <AddPost massagesData={massagesData}/>
    </div>
}

export default Profile