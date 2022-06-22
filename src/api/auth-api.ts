import {AuthDataType, LoginPayloadType} from '../components/Redux/auth-reducer'
import {instance} from './api'

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

export type ResponseType<T> = {
    data: T
    fieldsErrors: string[]
    resultCode: number
    messages: string[]
}