import {authAPI, profileAPI, securityAPI} from '../../api/api'
import {AppThunk, InferActionTypes} from './redux-store'
import {appActions} from './app-reducer'
import {profileActions} from './profile-reducer'
import axios from 'axios'
import {handleServerNetworkError} from '../../utils/handleError'
import {dialogsActions} from './dialogs-reducer'

export const SET_AUTH_DATA = 'sn-typescript/Authorize/SET-AUTH-DATA'
export const SET_IS_AUTH = 'sn-typescript/Authorize/SET-IS-AUTH'
export const SET_AVATAR = 'sn-typescript/Authorize/SET-AVATAR'
export const SET_CAPTCHA = 'sn-typescript/Authorize/SET-CAPTCHA'

const initialState: AuthStateType = {
    data: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false,
    captchaUrl: '',
    ownAvatar: null
}

const authReducer = (state: StateType = initialState, action: AuthActionsType): StateType => {
    switch (action.type) {
        case SET_AUTH_DATA:
        case SET_IS_AUTH:
        case SET_CAPTCHA:
            return {...state, ...action.payload}
        case SET_AVATAR:
            if (state.data.id === action.payload.userId) {
                return {...state, ownAvatar: action.payload.avatar}
            } else {
                return state
            }
        default:
            return state
    }
}

export default authReducer

// actions:
export const authActions = {
    setAuthData: (data: AuthDataType) => ({type: SET_AUTH_DATA, payload: {data}} as const),
    setIsAuth: (isAuth: boolean) => ({type: SET_IS_AUTH, payload: {isAuth}} as const),
    setAvatar: (avatar: string | null, userId: number | null) => ({
        type: SET_AVATAR,
        payload: {avatar, userId}
    } as const),
    setCaptchaUrl: (captchaUrl: string) => ({type: SET_CAPTCHA, payload: {captchaUrl}} as const)
}

// thunks:
export const getAuthData = (): AppThunk => async (dispatch) => {
    dispatch(appActions.setInitialize(true))
    try {
        const response = await authAPI.me()
        if (response.data.resultCode === 0) {
            dispatch(authActions.setAuthData(response.data.data))
            dispatch(authActions.setIsAuth(true))
        } else {
            dispatch(appActions.setAppError(response.data.messages))
        }
    } catch (e) {
        if (axios.isAxiosError(e) && e.response) {
            dispatch(appActions.setAppError(e.response.data.message))
        }
    } finally {
        dispatch(appActions.setInitialize(false))
    }
}

export const login = (payload: LoginPayloadType): AppThunk => async (dispatch) => {
    dispatch(appActions.setIsLoading(true))
    dispatch(authActions.setCaptchaUrl(''))
    try {
        const response = await authAPI.login(payload)
        const errorArr: string[] = response.data.messages
        if (response.data.resultCode === 0) {
            // dispatch(getAuthData())
            const authData = await authAPI.me()
            if(authData.data.resultCode === 0) {
                dispatch(authActions.setAuthData(authData.data.data))
                dispatch(authActions.setIsAuth(true))
                const profile = await profileAPI.getUserProfile(authData.data.data.id as number)
                dispatch(authActions.setAvatar(profile.data.photos.small, authData.data.data.id))
                dispatch(dialogsActions.setOwnerAvatar(profile.data.photos.small as string))
            }
        } else if (response.data.messages.length) {
            if (response.data.resultCode === 10) {
                dispatch(appActions.setAppError(errorArr))
                dispatch(getCaptchaUrl())
            }
            dispatch(appActions.setAppError(errorArr))
            dispatch(appActions.setIsLoading(false))
        }
    } catch (e) {
        handleServerNetworkError(dispatch, e as Error)
    } finally {
        dispatch(appActions.setIsLoading(false))
    }
}

export const loginOut = (): AppThunk => async (dispatch) => {
    dispatch(appActions.setIsLoading(true))
    try {
        const response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(authActions.setIsAuth(false))
            dispatch(profileActions.setUserProfile(null))
            dispatch(authActions.setAvatar(null, null))
        }
    } catch (e) {
        handleServerNetworkError(dispatch, e as Error)
    } finally {
        dispatch(appActions.setIsLoading(false))
    }
}

export const getCaptchaUrl = (): AppThunk => async (dispatch) => {
    dispatch(appActions.setIsLoading(true))
    try {
        const response = await securityAPI.getCaptchaUrl()
        dispatch(authActions.setCaptchaUrl(response.data.url))
    } catch (e) {
        handleServerNetworkError(dispatch, e as Error)
    } finally {
        dispatch(appActions.setIsLoading(false))
    }
}

// types:
export type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
}

export type AuthStateType = {
    data: AuthDataType
    isAuth: boolean
    ownAvatar: string | null
    captchaUrl: string
}

export type LoginPayloadType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type StateType = typeof initialState
export type AuthActionsType = InferActionTypes<typeof authActions>


