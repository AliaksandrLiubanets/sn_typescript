import {connect} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'
import {followAC, setUsersAC, unfollowAC, UserType} from '../Redux/users-reducer'
import {Dispatch} from 'redux'
import User from './User'
import emptyAva from '../../assets/empty_avatar.jpg'
import s from './Users.module.css'
import {Component} from 'react'
import {v1} from 'uuid'
import ava_dimych from '../../assets/ava_dimych.jpg'
import ava_olga from '../../assets/ava_olga.jpg'
import ava_karina from '../../assets/ava_karina.jpg'
import ava_artem from '../../assets/ava_lenin.png'

type PropsType = MapStatePropsType & MapDispatchPropsType

class Users extends Component<PropsType> {

    constructor(props: PropsType) {
        super(props)
        props.setUsers([
            {id: v1(), followed: true, status: 'Life is good!', name: 'Dimych', photos: {small: ava_dimych, large: ''}, location: {city: 'Minsk', country: 'Belarus'}},
            {id: v1(), followed: false, status: 'Life is good!', name: 'Olga', photos: {small: ava_olga, large: ''}, location: {city: 'Minsk', country: 'Belarus'}},
            {id: v1(), followed: true, status: 'Life is good!', name: 'Karina', photos: {small: ava_karina, large: ''}, location: {city: 'Minsk', country: 'Belarus'}},
            {id: v1(), followed: false, status: 'Life is good!', name: 'Artem', photos: {small: ava_artem, large: ''}, location: {city: 'Minsk', country: 'Belarus'}},
        ])
    }

    render() {
        const users = this.props.users.map(u => <User key={u.id}
                                                      id={u.id}
                                                      name={u.name}
                                                      status={u.status}
                                                      followed={u.followed}
                                                      location={u.location ? u.location : undefined}
                                                      photo={u.photos.small || u.photos.large ? u.photos.small || u.photos.large : emptyAva}
                                                      follow={this.props.follow}
                                                      unfollow={this.props.unfollow}

        />)
        return <div className={s.users__content}>{users}</div>
    }
}

type MapStatePropsType = {
    users: Array<UserType>
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: userId => dispatch(followAC(userId)),
        unfollow: userId => dispatch(unfollowAC(userId)),
        setUsers: users => dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)