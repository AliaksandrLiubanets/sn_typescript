import {v1} from 'uuid'
import {AppThunk, InferActionTypes} from './redux-store'
import {appActions} from './app-reducer'
import {handleServerNetworkError} from '../../utils/handleError'
import {authActions} from './auth-reducer'
import {setDialogsAvatar} from './dialogs-reducer'
import {PhotosType, profileAPI} from '../../api/profile-api'

export const ADD_POST = 'sn-typescript/ProfilePage/ADD-POST'
export const DELETE_POST = 'sn-typescript/ProfilePage/DELETE-POST'
export const ADD_CURRENT_VALUE = 'sn-typescript/ProfilePage/ADD-CURRENT-VALUE'
export const SET_USER_PROFILE = 'sn-typescript/ProfilePage/SET-USER-PROFILE'
export const SET_STATUS = 'sn-typescript/ProfilePage/SET-STATUS'
export const UPDATE_PHOTO = 'sn-typescript/ProfilePage/UPDATE-PHOTO'
export const UPDATE_PROFILE = 'sn-typescript/ProfilePage/UPDATE-PROFILE'

export const initialState: ProfilePageType = {
    messagesData: [
        {id: v1(), message: 'Hello!', likes: 3},
        {id: v1(), message: 'I am free!', likes: 5},
        {id: v1(), message: 'What a lovely day today!', likes: 8},
        {id: v1(), message: "Let's play volleyball at 7pm.", likes: 4},
        {id: v1(), message: 'Who likes React?', likes: 7},
    ],
    profile: null,
    status: null
}

export const profileReducer = (state: StateType = initialState, action: ProfileActionsType): StateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType
            newPost = {
                id: v1(),
                message: action.payload.message.trim(),
                likes: 7
            }
            if (newPost.message) {
                return {
                    ...state,
                    messagesData: [newPost, ...state.messagesData]
                }
            }
            return state

        case DELETE_POST:
            return {
                ...state,
                messagesData: state.messagesData.filter(post => post.id !== action.postId)
            }

        case SET_USER_PROFILE:
        case SET_STATUS:
            return {...state, ...action.payload}

        case UPDATE_PHOTO:
            if (state.profile) {
                return {
                    ...state, profile: {...state.profile, photos: action.photo}
                }
            }
            return state

        case UPDATE_PROFILE:
            if (state.profile) {
            return {...state, profile: {...state.profile, ...action.profile}}
            }
            return state

        default:
            return state
    }
}

export default profileReducer

// actions:
export const profileActions = {
    addPost: (message: string) => ({type: ADD_POST, payload: {message}} as const),
    deletePost: (postId: string) => ({type: DELETE_POST, postId} as const),
    setUserProfile: (profile: ProfileType | null) => ({type: SET_USER_PROFILE, payload: {profile}} as const),
    setStatusProfile: (status: string) => ({type: SET_STATUS, payload: {status}} as const),
    updateProfilePhoto: (photo: PhotosType) => ({type: UPDATE_PHOTO, photo} as const),
    updateProfile: (profile: Omit<ProfileType, "photos">) => ({type: UPDATE_PROFILE, profile} as const),
}

//thunks:
export const getProfileData = (userId: number): AppThunk => (dispatch) => {
    dispatch(appActions.setIsLoading(true))
    const profileStatus = profileAPI.getStatus(userId)
    const profile = profileAPI.getUserProfile(userId)
    Promise.all([profile, profileStatus])
        .then(result => {
            dispatch(profileActions.setUserProfile(result[0].data))
            dispatch(profileActions.setStatusProfile(result[1].data))
            dispatch(authActions.setAvatar(result[0].data.photos.small, userId))
            dispatch(setDialogsAvatar())
        })
        .catch(e => {
            handleServerNetworkError(dispatch, e)
        })
        .finally(() => {
            dispatch(appActions.setIsLoading(false))
        })
}

export const getStatus = (userId: number): AppThunk => async (dispatch) => {
    dispatch(appActions.setIsLoading(true))
    try {
        const response = await profileAPI.getStatus(userId)
        dispatch(profileActions.setStatusProfile(response.data))
    } catch (e) {
        handleServerNetworkError(dispatch, e as Error)
    } finally {
        dispatch(appActions.setIsLoading(false))
    }
}

export const setStatus = (status: string): AppThunk => async (dispatch) => {
    dispatch(appActions.setIsLoading(true))
    try {
        const response = await profileAPI.setStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(profileActions.setStatusProfile(status))
        } else {
            dispatch(appActions.setAppError(response.data.messages))
        }
    } catch (e) {
        handleServerNetworkError(dispatch, e as Error)
    } finally {
        dispatch(appActions.setIsLoading(false))
    }
}

export const uploadPhoto = (photo: File): AppThunk => async (dispatch, getState) => {
    const userId = getState().auth.data.id
    dispatch(appActions.setIsLoading(true))
    try {
        const response = await profileAPI.uploadPhoto(photo)
        if (response.data.resultCode === 0) {
            dispatch(profileActions.updateProfilePhoto(response.data.data.photos))
            dispatch(authActions.setAvatar(response.data.data.photos.small, userId))
            dispatch(setDialogsAvatar())
        } else {
            dispatch(appActions.setAppError(response.data.messages))
        }
    } catch (e) {
        handleServerNetworkError(dispatch, e as Error)
    } finally {
        dispatch(appActions.setIsLoading(false))
    }
}

export const updateProfile = (profile: Omit<ProfileType, "photos">): AppThunk => async (dispatch) => {
    dispatch(appActions.setIsLoading(true))
    try {
        const response = await profileAPI.updateProfile(profile)
        if (response.data.resultCode === 0) {
            dispatch(profileActions.updateProfile(profile))
        } else {
            dispatch(appActions.setAppError(response.data.messages))
        }
    } catch (e) {
        handleServerNetworkError(dispatch, e as Error)
    } finally {
        dispatch(appActions.setIsLoading(false))
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
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: {
        small: string | null
        large: string | null
    }
}
export type ProfilePageType = {
    messagesData: Array<PostType>
    profile: ProfileType | null
    status: string | null
}

type StateType = typeof initialState
export type ProfileActionsType = InferActionTypes<typeof profileActions>

