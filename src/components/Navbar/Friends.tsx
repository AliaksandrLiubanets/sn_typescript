import s from './Navbar.module.css'
import React from 'react'
import Friend from './Friend'
import {FriendsType} from '../Redux/store'

type FriendsPropsType = {
    friends: Array<FriendsType>
}

function Friends (props: FriendsPropsType ) {

    const friends = props.friends.map(fr => <Friend key={fr.id} name={fr.name} ava={fr.ava}/>)


    return  <div className={s.friends_block}>
        <h4>Friends</h4>
        <div className={s.friends}>
            {friends}
        </div>
    </div>
}

export default Friends