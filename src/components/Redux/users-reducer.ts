import {v1} from 'uuid'
import ava_olga from '../../assets/ava_olga.jpg'
import ava_karina from '../../assets/ava_karina.jpg'
import ava_artem from '../../assets/ava_lenin.png'
import ava_dimych from '../../assets/ava_dimych.jpg'

const FOLLOW_USER = "FOLLOW-USER"
const UNFOLLOW_USER = "UNFOLLOW-USER"
const SET_USERS = "SET-USER"

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
}

type FollowAT = {
    type: "FOLLOW-USER"
    userId: string
}

type UnFollowAT = {
    type: "UNFOLLOW-USER"
    userId: string
}

type SetUsersAT = {
    type: "SET-USER"
    users: Array<UserType>
}

type UsersAT = FollowAT | UnFollowAT | SetUsersAT

const initialState: UsersStateType  = {
    users: []
}

const usersReducer = (state = initialState, action: UsersAT): UsersStateType => {
    switch (action.type) {
        case 'FOLLOW-USER':
            return {
                ...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case 'UNFOLLOW-USER': {
            return {
                ...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        }
        case 'SET-USER':
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId: string): FollowAT => ({type: FOLLOW_USER, userId})
export const unfollowAC = (userId: string): UnFollowAT => ({type: UNFOLLOW_USER, userId})
export const setUsersAC = (users: Array<UserType>): SetUsersAT => ({type: SET_USERS, users})

export default usersReducer