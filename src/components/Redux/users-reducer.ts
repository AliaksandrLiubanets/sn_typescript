import {ResponseFollowUnfollowUser, usersAPI} from '../../api/api'
import {AppThunk, InferActionTypes} from './redux-store'
import {Dispatch} from 'redux'
import {updateUserInStateArray} from '../../utils/object-helpers'
import {AxiosResponse} from 'axios'
import {appActions} from './app-reducer'
import {handleServerNetworkError} from '../../utils/handleError'

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

export const usersReducer = (state: StateType = initialState, action: UsersAT): StateType => {
    switch (action.type) {
        case FOLLOW_USER:
        return updateUserInStateArray(state, action, 'followed', true)

        case UNFOLLOW_USER:
            return updateUserInStateArray(state, action, 'followed', false )

        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
                totalCount: action.count
            }
        case SET_CURRENT_PAGE:
        case TOGGLE_IS_FETCHING:
            return {...state, ...action.payload}

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
export const usersActions = {
    follow: (userId: number) => ({type: FOLLOW_USER, userId} as const),
    unfollow: (userId: number) => ({type: UNFOLLOW_USER, userId} as const),
    setUsers: (users: Array<UserType>, count: number) => ({type: SET_USERS, users, count} as const),
    setCurrentPage: (currentPage: number) => ({type: SET_CURRENT_PAGE, payload: {currentPage}} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, payload: {isFetching}} as const),
    setFollowingInProgress: (isFetching: boolean, userId: number) =>
        ({ type: FOLLOWING_IN_PROGRESS, isFetching, userId } as const)
}

// thunks:
export const getUsers = (currentPage: number, pageSize: number): AppThunk => async (dispatch) => {
    dispatch(appActions.setIsLoading(true))
    try {
        const response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(usersActions.setUsers(response.data.items, response.data.totalCount))
    }
    catch (e) {
        handleServerNetworkError(dispatch, e as Error)
    }
    finally {
        dispatch(appActions.setIsLoading(false))
    }
}

export const setCurrentPage = (currentPage: number): AppThunk => async (dispatch, getState) => {
    dispatch(appActions.setIsLoading(true))
    try {
        const pageSize = getState().usersPage.pageSize
        dispatch(usersActions.setCurrentPage(currentPage))
        dispatch(getUsers(currentPage, pageSize))
    }
    catch (e) {
        handleServerNetworkError(dispatch, e as Error)
    }
    finally {
        dispatch(appActions.setIsLoading(false))
    }
}

export const unfollow = (userId: number): AppThunk => async (dispatch) => {
    dispatch(appActions.setIsLoading(true))
    try {
        const apiMethod = usersAPI.unfollowUser.bind(usersAPI)
        followUnfollowFlow(userId, dispatch, apiMethod, usersActions.unfollow)
    }
    catch (e) {
        handleServerNetworkError(dispatch, e as Error)
    }
    finally {
        dispatch(appActions.setIsLoading(false))
    }
}

export const follow = (userId: number): AppThunk => async (dispatch) => {
    dispatch(appActions.setIsLoading(true))
    try {
        const apiMethod = usersAPI.followUser.bind(usersAPI)
        followUnfollowFlow(userId, dispatch, apiMethod, usersActions.follow)
    }
    catch (e) {
        handleServerNetworkError(dispatch, e as Error)
    }
    finally {
        dispatch(appActions.setIsLoading(false))
    }
}

//function for follow, unfollow thunks:
const followUnfollowFlow = async (userId: number, dispatch: Dispatch, apiMethod: (userId: number) => Promise<AxiosResponse<ResponseFollowUnfollowUser>>, actionCreator: (userId: number) => UsersAT )  => {

    dispatch(usersActions.setFollowingInProgress(true, userId))
    const response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(usersActions.setFollowingInProgress(false, userId))
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
export type FollowAT = {
    type: typeof FOLLOW_USER
    userId: number
}
export type UnFollowAT = {
    type: typeof UNFOLLOW_USER
    userId: number
}


type StateType = typeof initialState
export type UsersAT = InferActionTypes<typeof usersActions>