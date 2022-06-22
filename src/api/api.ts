import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '39ca2954-9078-4730-9585-3162afc56d64'
    }
})

// type ResponseGetUsers = {
//     items: Array<UserType>
//     totalCount: number
//     error: null | string
// }

// export type PhotosType = {
//     small: string
//     large: string
// }
// type PhotosDataType = {
//     photos: PhotosType
// }
// export type ResponseType<T> = {
//     data: T
//     fieldsErrors: string[]
//     resultCode: number
//     messages: string[]
// }
// type ResponseUserProfile = ProfileType