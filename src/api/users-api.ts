import {UserType} from '../components/Redux/users-reducer'
import {instance} from './api'

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, term: string = '', friend: boolean | null = null) {
        return instance.get<ResponseGetUsers>(`users?page=${currentPage}&count=${pageSize}&term=${term}&friend=${friend === null ? '' : friend}`)
    },
    followUser(userId: number) {
        return instance.post<ResponseType<{}>>(`follow/${userId}`, {})
    },
    unfollowUser(userId: number) {
        return instance.delete<ResponseType<{}>>(`follow/${userId}`)
    }
}

type ResponseGetUsers = {
    items: Array<UserType>
    totalCount: number
    error: null | string
}
export type ResponseType<T> = {
    data: T
    fieldsErrors: string[]
    resultCode: number
    messages: string[]
}