import {ProfileType} from '../components/Redux/profile-reducer'
import {instance} from './api'

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
    updateProfile(profile: Omit<ProfileType, 'photos'>) {
        return instance.put<ResponseType<{}>>(`profile`, profile)
    },
    uploadPhoto(photo: File) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put<ResponseType<PhotosDataType>>(`profile/photo`, formData, {
                headers: {'Content-Type': 'multipart/form-data'}
            }
        )
    }
}

export type PhotosType = {
    small: string
    large: string
}
type PhotosDataType = {
    photos: PhotosType
}
export type ResponseType<T> = {
    data: T
    fieldsErrors: string[]
    resultCode: number
    messages: string[]
}
type ResponseUserProfile = ProfileType