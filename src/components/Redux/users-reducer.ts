import {usersAPI} from '../../api/api'
import {ThunkAction} from 'redux-thunk'
import {RootStateType} from './redux-store'

const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING-IN-PROGRESS'

export type UserType = {
    id: number
    followed: boolean
    status: string | null
    name: string
    photos: {
        small: string | null
        large: string | null
    }
    uniqueUrlName?: null | string
    location?: {
        city: string
        country: string
    }
}

export type UsersStateType = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type FollowAT = {
    type: typeof FOLLOW_USER
    userId: number
}

type UnFollowAT = {
    type: typeof UNFOLLOW_USER
    userId: number
}

type SetUsersAT = {
    type: typeof SET_USERS
    users: Array<UserType>
    count: number
}

type SetCurrentPageAT = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

type ToggleIsFetchingAT = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

type FollowingInProgressAT = {
    type: typeof FOLLOWING_IN_PROGRESS
    userId: number
    isFetching: boolean
}

type UsersAT = FollowAT | UnFollowAT | SetUsersAT | SetCurrentPageAT | ToggleIsFetchingAT | FollowingInProgressAT

const initialState: UsersStateType = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action: UsersAT): UsersStateType => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW_USER: {
            return {
                ...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
                totalCount: action.count
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followAC = (userId: number): FollowAT => ({type: FOLLOW_USER, userId})
export const unfollowAC = (userId: number): UnFollowAT => ({type: UNFOLLOW_USER, userId})
export const setUsersAC = (users: Array<UserType>, count: number): SetUsersAT => ({type: SET_USERS, users, count})
export const setCurrentPageAC = (currentPage: number): SetCurrentPageAT => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleIsFetchingAC = (isFetching: boolean): ToggleIsFetchingAT => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setFollowingInProgressAC = (isFetching: boolean, userId: number): FollowingInProgressAT => ({
    type: FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
})


type ThunkType = ThunkAction<void, RootStateType, unknown, UsersAT>

export const getUsers = (currentPage: number, pageSize: number): ThunkType => (dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(response => {
            dispatch(setUsersAC(response.data.items, response.data.totalCount))
            dispatch(toggleIsFetchingAC(false))
        })
}

export const unfollow = (userId: number): ThunkType => (dispatch) => {
    dispatch(setFollowingInProgressAC(true, userId))
    usersAPI.unfollowUser(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowAC(userId))
            }
            dispatch(setFollowingInProgressAC(false, userId))
        })
}

export const follow = (userId: number): ThunkType => (dispatch) => {
    dispatch(setFollowingInProgressAC(true, userId))
    usersAPI.followUser(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followAC(userId))
            }
            dispatch(setFollowingInProgressAC(false, userId))
        })
}
export default usersReducer