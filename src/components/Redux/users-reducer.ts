import {usersAPI} from '../../api/api'
import {ThunkAction} from 'redux-thunk'
import {RootStateType} from './redux-store'
import {Dispatch} from 'redux'

const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING-IN-PROGRESS'


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

export default usersReducer

// actions:
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

// thunks:
export const getUsers = (currentPage: number, pageSize: number): ThunkType => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    const response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsersAC(response.data.items, response.data.totalCount))
    dispatch(toggleIsFetchingAC(false))

}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    const apiMethod = usersAPI.unfollowUser.bind(usersAPI)
    followUnfollowFlow(userId, dispatch, apiMethod, unfollowAC)
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
    const apiMethod = usersAPI.followUser.bind(usersAPI)
    followUnfollowFlow(userId, dispatch, apiMethod, followAC)
}

const followUnfollowFlow = async (userId: number, dispatch: Dispatch, apiMethod: any, actionCreator: any )  => {

    dispatch(setFollowingInProgressAC(true, userId))
    const response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(setFollowingInProgressAC(false, userId))
}

// types:
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

type ThunkType = ThunkAction<void, RootStateType, unknown, UsersAT>

type UsersAT =
    | FollowAT
    | UnFollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | ToggleIsFetchingAT
    | FollowingInProgressAT