import {connect} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'
import {followAC, setUsersAC, unfollowAC, UserType} from '../Redux/users-reducer'
import {Dispatch} from 'redux'
import User from './User'
import emptyAva from '../../assets/empty_avatar.jpg'

type PropsType = MapStatePropsType & MapDispatchPropsType

function Users(props: PropsType) {
    return props.users.map(u => <User key={u.id}
                                      name={u.name}
                                      status={u.status}
                                      folllowed={u.followed}
                                      location={u.location ? u.location : null}
                                      photo={u.photos.small || u.photos.large ? u.photos.small || u.photos.large : emptyAva}
                                      follow={props.follow}
                                      unfollow={props.unfollow}

    />)
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