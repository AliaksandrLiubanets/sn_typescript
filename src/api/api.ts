import axios from "axios";
import {UserType} from '../components/Redux/users-reducer'
import {AuthDataType} from '../components/Redux/auth-reducer'
import {ProfileType} from '../components/Redux/profile-reducer'

type ResponseGetUsers = {
    items: Array<UserType>
    totalCount: number
    error: null | string
}

type ResponseFollowUnfollowUser = {
    resultCode: number
    messages: null | Array<string>
    data: Date
}

type ResponseAuth = {
    resultCode: number
    messages: string[]
    data: AuthDataType
}

type ResponeStatus = string

type ResponseUserProfile = ProfileType

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "ec259ea8-b888-43af-83e9-f75c638bfe8f"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<ResponseGetUsers>(`users?page=${currentPage}&count=${pageSize}`)
    },

    followUser(userId: number) {
        return instance.post<ResponseFollowUnfollowUser>(`follow/${userId}`, {})
    },

    unfollowUser(userId: number) {
        return instance.delete<ResponseFollowUnfollowUser>(`follow/${userId}`)
    },
}

export const authAPI = {
    auth() {
        return instance.get<ResponseAuth>('auth/me')
    }
}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get<ResponseUserProfile>(`profile/${userId}`)
    }
}