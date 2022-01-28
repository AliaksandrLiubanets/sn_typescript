import {connect} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'
import {follow, setCurrentPage, setUsers, toggleIsFetching, unfollow, UserType} from '../Redux/users-reducer'
import User from './User'
import emptyAva from '../../assets/empty_avatar.jpg'
import s from './Users.module.css'
import {Component} from 'react'
import axios from 'axios'
import {Preloader} from '../common/Preloader/Preloader'

type PropsType = MapStatePropsType & MapDispatchPropsType

class Users extends Component<PropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items, response.data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    setCurrentPage(currentPage: number) {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items, response.data.totalCount)
                this.props.toggleIsFetching(false)
            })
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
        const pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div className={s.pagination}>
                {
                    this.props.isFetching
                        ? <Preloader/>
                        : pages.map(p => <span key={p}
                                               onClick={() => this.setCurrentPage(p)}
                                               className={this.props.currentPage === p ? s.current : s.pages}>
                    {p}</span>)
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
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>, totalCount: number) => void
    setCurrentPage: (setCurrentPage: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {follow,
    unfollow,
    setUsers,
    setCurrentPage,
    toggleIsFetching})(Users)