const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

export type UserType = {
    id: string
    followed: boolean
    status: string
    name: string
    photos: {
        small: string | undefined
        large: string | undefined
    }
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
}

type FollowAT = {
    type: typeof FOLLOW_USER
    userId: string
}

type UnFollowAT = {
    type: typeof UNFOLLOW_USER
    userId: string
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

type UsersAT = FollowAT | UnFollowAT | SetUsersAT | SetCurrentPageAT | ToggleIsFetchingAT

const initialState: UsersStateType = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 2,
    isFetching: false
}

const usersReducer = (state = initialState, action: UsersAT): UsersStateType => {
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
        default:
            return state
    }
}

export const followAC = (userId: string): FollowAT => ({type: FOLLOW_USER, userId})
export const unfollowAC = (userId: string): UnFollowAT => ({type: UNFOLLOW_USER, userId})
export const setUsersAC = (users: Array<UserType>, count: number): SetUsersAT => ({type: SET_USERS, users, count})
export const setCurrentPageAC = (currentPage: number): SetCurrentPageAT => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleIsFetchingAC = (isFetching: boolean): ToggleIsFetchingAT => ({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer