import {v1} from 'uuid'
import {Dispatch} from 'redux'
import {profileAPI} from '../../api/api'

export const ADD_POST = 'sn-typescript/ProfilePage/ADD-POST'
export const ADD_CURRENT_VALUE = 'sn-typescript/ProfilePage/ADD-CURRENT-VALUE'
export const SET_USER_PROFILE = 'sn-typescript/ProfilePage/SET-USER-PROFILE'
export const SET_STATUS = 'sn-typescript/ProfilePage/SET-STATUS'

export type PostType = {
    id: string
    message: string
    likes: number
}

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: string
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: {
        small: string
        large: string
    }
}

export type ProfilePageType = {
    textareaCurrentValue: string
    messagesData: Array<PostType>
    profile: ProfileType | null
    status: string | null
}

export const initialState: ProfilePageType = {
    textareaCurrentValue: '',
    messagesData: [
        {id: v1(), message: 'hello!', likes: 3},
        {id: v1(), message: 'Hi!', likes: 5},
        {id: v1(), message: 'How is it going?!', likes: 8}
    ],
    profile: null,
    status: null,
}

const profileReducer = (state = initialState, action: ProfilePageActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType
            newPost = {
                id: v1(),
                message: state.textareaCurrentValue.trim(),
                likes: 7
            }

            if (newPost.message) {
                return {
                    ...state,
                    textareaCurrentValue: '',
                    messagesData: [...state.messagesData, newPost]
                }
            }

            return state
        case ADD_CURRENT_VALUE:
            return {...state, textareaCurrentValue: action.newText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export type AddPostActionType = ReturnType<typeof addPost>
export type AddCurrentValueActionType = ReturnType<typeof addCurrentValue>
export type SetUserProfileActionType = ReturnType<typeof setUserProfileAC>
export type SetStatusActionType = ReturnType<typeof setStatusProfileAC>

export type ProfilePageActionsType = AddPostActionType | AddCurrentValueActionType | SetUserProfileActionType | SetStatusActionType

export const addPost = () => ({type: ADD_POST} as const)
export const addCurrentValue = (text: string) => ({type: ADD_CURRENT_VALUE, newText: text} as const)
export const setUserProfileAC = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatusProfileAC = (status: string) => ({type: SET_STATUS, status} as const)

export const setUserProfile = (userId: number) => (dispatch: Dispatch) => {
    return profileAPI.getUserProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data))
        })
}

export const setStatus = (userId: number) => (dispatch: Dispatch) => {
    return profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatusProfileAC(response.data))
        })
}

export default profileReducer