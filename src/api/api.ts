import axios from 'axios'
import {UserType} from '../components/Redux/users-reducer'
import {AuthDataType, LoginPayloadType} from '../components/Redux/auth-reducer'
import {ProfileType} from '../components/Redux/profile-reducer'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '39ca2954-9078-4730-9585-3162afc56d64'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<ResponseGetUsers>(`users?page=${currentPage}&count=${pageSize}`)
    },
    followUser(userId: number) {
        return instance.post<ResponseType<{}>>(`follow/${userId}`, {})
    },
    unfollowUser(userId: number) {
        return instance.delete<ResponseType<{}>>(`follow/${userId}`)
    }
}

export const authAPI = {
    me() {
        return instance.get<ResponseType<AuthDataType>>('auth/me')
    },
    login(payload: LoginPayloadType) {
        return instance.post<ResponseType<{userId: number} | {}>>(`auth/login`, payload)
    },
    logout() {
        return instance.delete<ResponseType<{userId: number} | {}>>('auth/login')
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
        return instance.put<ResponseType<{}>>(`profile/status`, {status})
    },
    uploadPhoto(photo: any) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put<ResponseType<PhotosDataType>>(`profile/photo`, formData, {
                headers: {'Content-Type': 'multipart/form-data'}
            }
        )
    }
}

type ResponseGetUsers = {
    items: Array<UserType>
    totalCount: number
    error: null | string
}
export type ResponseFollowUnfollowUser = {
    data: {}
    resultCode: number
    fieldsErrors: string[]
    messages: null | Array<string>
}
export type PhotosType = {
    small: string
    large: string
}
type PhotosDataType = {
    photos: PhotosType
}
type ResponseType<T> = {
    data: T
    fieldsErrors: string[]
    resultCode: number
    messages: string[]
}
type ResponseUserProfile = ProfileType