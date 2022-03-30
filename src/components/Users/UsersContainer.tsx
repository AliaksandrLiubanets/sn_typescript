import {connect} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'
import {follow, getUsers, setCurrentPage, unfollow, UserType} from '../Redux/users-reducer'
import User from './User'
import s from './Users.module.css'
import React, {Component, ComponentType} from 'react'
import {Preloader} from '../common/Preloader/Preloader'
import {withAuthNavigate} from '../HOC/withAuthNavigate'
import {compose} from 'redux'
import {
    followingInProgressSelector,
    getCurrentPageSelector,
    getPageSizeSelector,
    getTotalCountSelector,
    getUsersNamedSinceMSelector,
    isAuthSelector,
    isFetchingSelector
} from '../../selectors/users-selectors'


type PropsType = MapStatePropsType & MapDispatchPropsType

class Users extends Component<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    setCurrentPage(currentPage: number) {
        this.props.setCurrentPage(currentPage)
        this.props.getUsers(currentPage, this.props.pageSize)
    }

    render() {

        const users = this.props.users.map(u => <User key={u.id}
                                                      id={u.id}
                                                      name={u.name}
                                                      status={u.status}
                                                      followed={u.followed}
                                                      location={u.location ? u.location : undefined}
                                                      photos={u.photos}
                                                      follow={this.props.follow}
                                                      unfollow={this.props.unfollow}
                                                      followingInProgress={this.props.followingInProgress}
        />)
        const pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div className={s.pagination}>
                {
                    this.props.isFetching
                        ? <div className={s.pagination__pages}><Preloader/></div>
                        : <div className={s.pagination__pages}> {pages.map(p => <span key={p}
                                               onClick={() => this.setCurrentPage(p)}
                                               className={this.props.currentPage === p ? s.current : s.pages}>
                    {p}</span>)}
                    </div>
                }
            </div>
            <div className={s.users__content}>{users}</div>
        </div>
    }
}

type MapStatePropsType = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    isAuth: boolean
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (setCurrentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        // users: getUsersSelector(state),
        users: getUsersNamedSinceMSelector(state),
        totalCount: getTotalCountSelector(state),
        pageSize: getPageSizeSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: isFetchingSelector(state),
        followingInProgress: followingInProgressSelector(state),
        isAuth: isAuthSelector(state),
    }
}

export default compose<ComponentType>(
    withAuthNavigate,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        getUsers,
    }),
)(Users)