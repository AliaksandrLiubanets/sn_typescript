import s from './Navbar.module.css'
import React from 'react'
import Friend from './Friend'
import {connect} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'
import {FriendType} from '../Redux/sidebar-reducer'


function Friends(props: MapStatePropsType) {

    const friends = props.friends.map(fr => <Friend key={fr.id} name={fr.name} ava={fr.ava}/>)

    return <div className={s.friends_block}>
                <h4>Friends</h4>
                <div className={s.friends}>
                    {friends}
                </div>
            </div>
}

type MapStatePropsType = {
    friends: Array<FriendType>
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        friends: state.sidebar.friends
    }
}

export const FriendsContainer = connect(mapStateToProps)(Friends)