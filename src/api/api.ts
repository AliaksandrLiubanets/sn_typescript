import axios from "axios";
import {UserType} from '../components/Redux/users-reducer'
import {AuthDataType, LoginPayloadType} from '../components/Redux/auth-reducer'
import {ProfileType} from '../components/Redux/profile-reducer'

type ResponseGetUsers = {
    items: Array<UserType>
    totalCount: number
    error: null | string
}

export type ResponseFollowUnfollowUser = {
    resultCode: number
    messages: null | Array<string>
    data: {}
}

type ResponseAuthStatus = {
    resultCode: number
    messages: string[]
    data: AuthDataType
}

type ResponseLogin = {
    resultCode: number
    messages: string[]
    data: {userId: number} | {}
}

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
    me() {
        return instance.get<ResponseAuthStatus>('auth/me')
    },
    login(payload: LoginPayloadType) {
        return instance.post<ResponseLogin>(`auth/login`, payload)
    },
    logout() {
        return instance.delete<ResponseLogin>('auth/login')
    }

}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get<ResponseUserProfile>(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
    },
    setStatus(status: string) {
        return instance.put<ResponseAuthStatus>(`profile/status`, {status})
    },
}