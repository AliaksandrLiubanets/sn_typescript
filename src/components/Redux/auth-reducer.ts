import {authAPI} from '../../api/api'
import {ThunkAction} from 'redux-thunk'
import {RootStateType} from './redux-store'
import {SetIsInitializeType} from './app-reducer'
import {Dispatch} from 'redux'

export const SET_AUTH_DATA = 'sn-typescript/Authorize/SET-AUTH-DATA'
export const SET_IS_AUTH = 'sn-typescript/Authorize/SET-IS-AUTH'

const initialState: AuthStateType = {
    data: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false
}

const authReducer = (state: AuthStateType = initialState, action: AuthActionsType): AuthStateType => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {...state, data: action.data}
        case SET_IS_AUTH:
            return {...state, isAuth: action.isAuth}
        default:
            return state
    }
}

// actions:
export const setAuthDataAC = (data: AuthDataType) => ({type: SET_AUTH_DATA, data} as const)
export const setIsAuthAC = (isAuth: boolean) => ({type: SET_IS_AUTH, isAuth} as const)


// thunks:
export const getAuthData = () => async (dispatch: Dispatch) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        dispatch(setAuthDataAC(response.data.data))
        dispatch(setIsAuthAC(true))
    }

}

export const login = (payload: LoginPayloadType): ThunkType => async (dispatch) => {
    const response = await authAPI.login(payload)
    if (response.data.resultCode === 0) {
        dispatch(getAuthData())
    }

}

export const loginOut = (): ThunkType => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        getAuthData()
        dispatch(setIsAuthAC(false))
    }
}

export default authReducer


// types:
export type AuthDataType = {
    id: string | null
    email: string | null
    login: string | null
}

export type AuthStateType = {
    data: AuthDataType
    isAuth: boolean
}

export type LoginPayloadType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: boolean
}

export type AuthType = ReturnType<typeof setAuthDataAC>
export type SetIsAuthType = ReturnType<typeof setIsAuthAC>

export type AuthActionsType =
    | AuthType
    | SetIsAuthType
    | SetIsInitializeType

export type ThunkType = ThunkAction<void, RootStateType, unknown, AuthActionsType>