import axios from "axios";
import {UserType} from '../components/Redux/users-reducer'

type ItemUserType =  {
    name: string
    id: number
    uniqueUrlName: null
    photos: {
        small: null | string
        large: null | string
    },
    status: null | string
    followed: boolean
    location?: {
        city: string
        country: string
    }
}

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