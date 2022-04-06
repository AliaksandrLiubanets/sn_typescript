import {v1} from 'uuid'
import {profileAPI} from '../../api/api'
import {AppThunk, InferActionTypes} from './redux-store'

export const ADD_POST = 'sn-typescript/ProfilePage/ADD-POST'
export const DELETE_POST = 'sn-typescript/ProfilePage/DELETE-POST'
export const ADD_CURRENT_VALUE = 'sn-typescript/ProfilePage/ADD-CURRENT-VALUE'
export const SET_USER_PROFILE = 'sn-typescript/ProfilePage/SET-USER-PROFILE'
export const SET_STATUS = 'sn-typescript/ProfilePage/SET-STATUS'


export const initialState: ProfilePageType = {
    messagesData: [
        {id: v1(), message: 'hello!', likes: 3},
        {id: v1(), message: 'Hi!', likes: 5},
        {id: v1(), message: 'How is it going?!', likes: 8}
    ],
    textareaCurrentValue: '',
    profile: null,
    status: null
}

export const profileReducer = (state = initialState, action: ProfileActionsType): ProfilePageType => {
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
        case DELETE_POST:
            return {
                ...state,
                messagesData: state.messagesData.filter(post => post.id !== action.postId)
            }

        case ADD_CURRENT_VALUE:
        case SET_USER_PROFILE:
        case SET_STATUS:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default profileReducer

// actions:
export const profileActions = {
    addPost: () => ({type: ADD_POST} as const),
    deletePost: (postId: string) => ({type: DELETE_POST, postId} as const),
    addCurrentValue: (textareaCurrentValue: string) =>
        ({type: ADD_CURRENT_VALUE, payload: {textareaCurrentValue}} as const),
    setUserProfile: (profile: ProfileType) => ({type: SET_USER_PROFILE, payload: {profile} } as const),
    setStatusProfile: (status: string) => ({type: SET_STATUS, payload: {status}} as const)
}

// thunks:
export const setUserProfile = (userId: number): AppThunk => async (dispatch) => {
    const response = await profileAPI.getUserProfile(userId)
    dispatch(profileActions.setUserProfile(response.data))

}

export const getStatus = (userId: number): AppThunk => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(profileActions.setStatusProfile(response.data))
}

export const setStatus = (status: string): AppThunk => async (dispatch) => {
    const response = await profileAPI.setStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(profileActions.setStatusProfile(status))
    }
}

// actions:
export type PostType = {
    id: string
    message: string
    likes: number
}
export type ContactsType = {
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

export type ProfileActionsType = InferActionTypes<typeof profileActions>

