import s from './Navbar.module.css'
import React from 'react'
import Friend from './Friend'
import {StoreContext} from '../../StoreContext/StoreContext'

type FriendsPropsType = {
}

function Friends(props: FriendsPropsType) {

    return <StoreContext.Consumer>
        {(store) => {
            const friends = store?.getState().sidebar.friends.map(fr => <Friend key={fr.id} name={fr.name} ava={fr.ava}/>)
            return <div className={s.friends_block}>
                <h4>Friends</h4>
                <div className={s.friends}>
                    {friends}
                </div>
            </div>
        }}
    </StoreContext.Consumer>
}

export default Friends