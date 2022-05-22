import {connect} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'
import {follow, getUsers, SearchType, setCurrentPage, unfollow, UserType} from '../Redux/users-reducer'
import User from './User'
import s from './Users.module.css'
import React, {Component, ComponentType} from 'react'
import {withAuthNavigate} from '../HOC/withAuthNavigate'
import {compose} from 'redux'
import {
    followingInProgressSelector,
    getCurrentPageSelector,
    getPageSizeSelector,
    getTotalCountSelector,
    getUsersSelector,
    isAuthSelector,
    isFetchingSelector,
    isLoading,
    searchParams
} from '../../selectors/users-selectors'
import {Paginator} from '../common/Paginator/Paginator'
import p from '../Profile/Profile.module.css'
import {NoUsersFound} from './SearchUser/NoUsers/NoUsersFound'
import {Spinner} from '../common/Spinner/Spinner'
import {SearchForm} from './SearchUser/SearchForm'


type PropsType = MapStatePropsType & MapDispatchPropsType

class Users extends Component<PropsType> {

    componentDidMount() {
        const {filter, currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize, filter)
    }

    onSearchChange(filter: SearchType) {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize, filter)
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

        if(this.props.isLoading) {
            return <Spinner />
        }

        return (
            <div className={p.page_block}>
                <Paginator setCurrentPage={this.props.setCurrentPage}
                           itemsTotalCount={this.props.totalCount}
                           page={this.props.currentPage}
                           pageSize={this.props.pageSize}
                />
                {/*<SearchUser searchParams={this.props.searchParams}/>*/}
                <SearchForm searchParams={this.props.filter} onSearchChange={this.onSearchChange}/>
                {
                    users.length === 0
                        ? <NoUsersFound/>
                        : <div className={s.users__content}>
                            {users}
                        </div>
                }
            </div>
        )
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
    filter: SearchType
    isLoading: boolean
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (setCurrentPage: number) => void
    getUsers: (currentPage: number, pageSize: number, filter: SearchType) => void
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: getUsersSelector(state),
        totalCount: getTotalCountSelector(state),
        pageSize: getPageSizeSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: isFetchingSelector(state),
        followingInProgress: followingInProgressSelector(state),
        isAuth: isAuthSelector(state),
        filter: searchParams(state),
        isLoading: isLoading(state)
    }
}

export default compose<ComponentType>(
    withAuthNavigate,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        getUsers
    })
)(Users)