import {ResponseFollowUnfollowUser, usersAPI} from '../../api/api'
import {AppThunk, InferActionTypes} from './redux-store'
import {Dispatch} from 'redux'
import {updateUserInStateArray} from '../../utils/object-helpers'
import {AxiosResponse} from 'axios'
import {appActions} from './app-reducer'
import {handleServerNetworkError} from '../../utils/handleError'

const FOLLOW_USER = 'sn-typescript/UsersPage/FOLLOW_USER'
const UNFOLLOW_USER = 'sn-typescript/UsersPage/UNFOLLOW_USER'
const SET_USERS = 'sn-typescript/UsersPage/SET_USERS'
const SET_SEARCH_PARAMS = 'sn-typescript/UsersPage/SET_SEARCH_PARAMS'
const SET_TOTAL_USERS_COUNT = 'sn-typescript/UsersPage/SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'sn-typescript/UsersPage/SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'sn-typescript/UsersPage/TOGGLE_IS_FETCHING'
const FOLLOWING_IN_PROGRESS = 'sn-typescript/UsersPage/FOLLOWING_IN_PROGRESS'


const initialState: UsersStateType = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    searchParams: {
        term: '',
        friend: null
    },

}

export const usersReducer = (state: StateType = initialState, action: UsersAT): StateType => {
    switch (action.type) {
        case FOLLOW_USER:
            return updateUserInStateArray(state, action, 'followed', true)

        case UNFOLLOW_USER:
            return updateUserInStateArray(state, action, 'followed', false)

        case SET_USERS:
            return {...state, users: [...action.users] }
        case SET_TOTAL_USERS_COUNT:
        case SET_CURRENT_PAGE:
        case TOGGLE_IS_FETCHING:
        case SET_SEARCH_PARAMS:
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
    setUsers: (users: Array<UserType>) => ({type: SET_USERS, users} as const),
    setSearchParams: (searchParams: SearchType) => ({type: SET_SEARCH_PARAMS, payload: {searchParams}} as const),
    setTotalUsersCount: (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, payload: {totalCount}} as const),
    setCurrentPage: (currentPage: number) => ({type: SET_CURRENT_PAGE, payload: {currentPage}} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, payload: {isFetching}} as const),
    setFollowingInProgress: (isFetching: boolean, userId: number) =>
        ({type: FOLLOWING_IN_PROGRESS, isFetching, userId} as const)
}

// thunks:
export const getUsers = (currentPage: number,
                         pageSize: number,
                         searchingName: string,
                         friend: boolean | null): AppThunk => async (dispatch) => {
    dispatch(appActions.setIsLoading(true))
    try {
        const response = await usersAPI.getUsers(currentPage, pageSize, searchingName, friend)
        if(response.data.items.length === 0) {
            const response = await usersAPI.getUsers(currentPage, pageSize, '', null)
            dispatch(usersActions.setUsers(response.data.items))
            dispatch(usersActions.setTotalUsersCount(response.data.totalCount))
        } else {
            dispatch(usersActions.setUsers(response.data.items))
            dispatch(usersActions.setTotalUsersCount(response.data.totalCount))
            dispatch(usersActions.setSearchParams({term: searchingName, friend}))
        }

    } catch (e) {
        handleServerNetworkError(dispatch, e as Error)
    } finally {
        dispatch(appActions.setIsLoading(false))
    }
}

export const setCurrentPage = (currentPage: number): AppThunk => async (dispatch, getState) => {
    dispatch(appActions.setIsLoading(true))
    const searchParams = getState().usersPage.searchParams
    try {
        const pageSize = getState().usersPage.pageSize
        dispatch(usersActions.setCurrentPage(currentPage))
        await dispatch(getUsers(currentPage, pageSize, searchParams.term, searchParams.friend))
    } catch (e) {
        handleServerNetworkError(dispatch, e as Error)
    } finally {
        dispatch(appActions.setIsLoading(false))
    }
}

export const unfollow = (userId: number): AppThunk => async (dispatch) => {
    dispatch(appActions.setIsLoading(true))
    try {
        const apiMethod = usersAPI.unfollowUser.bind(usersAPI)
        await followUnfollowFlow(userId, dispatch, apiMethod, usersActions.unfollow)
    } catch (e) {
        handleServerNetworkError(dispatch, e as Error)
    } finally {
        dispatch(appActions.setIsLoading(false))
    }
}

export const follow = (userId: number): AppThunk => async (dispatch) => {
    dispatch(appActions.setIsLoading(true))
    try {
        const apiMethod = usersAPI.followUser.bind(usersAPI)
        await followUnfollowFlow(userId, dispatch, apiMethod, usersActions.follow)
    } catch (e) {
        handleServerNetworkError(dispatch, e as Error)
    } finally {
        dispatch(appActions.setIsLoading(false))
    }
}

//function for follow, unfollow thunks:
const followUnfollowFlow = async (userId: number, dispatch: Dispatch, apiMethod: (userId: number) => Promise<AxiosResponse<ResponseFollowUnfollowUser>>, actionCreator: (userId: number) => UsersAT) => {
    dispatch(usersActions.setFollowingInProgress(true, userId))
    const response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    } else {
        if (response.data.messages && response.data.messages.length) {
            const errorArr: string[] = response.data.messages
            dispatch(appActions.setAppError(errorArr))
            dispatch(appActions.setIsLoading(false))
        }
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

export type SearchType = {
    term: string,
    friend: null | boolean
}
export type UsersStateType = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    searchParams: SearchType
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