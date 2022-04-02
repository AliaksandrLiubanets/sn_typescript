import {authAPI} from '../../api/api'
import {ThunkAction} from 'redux-thunk'
import {RootStateType} from './redux-store'
import {setAppErrorMessageAC, SetAppErrorMessageType, SetIsInitializeType} from './app-reducer'
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

export default authReducer

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

export const login = (payload: LoginPayloadType): ThunkType => (dispatch) => {
    return authAPI.login(payload)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthData())
            } else {
                if (response.data.messages.length) {
                    const error: string = response.data.messages[0]
                    dispatch(setAppErrorMessageAC(error))
                    console.warn(error)
                }
            }
        }).catch(err => {
            console.warn('Some error')
            console.log(err.message)
            dispatch(setAppErrorMessageAC(err.message))
        })
}

export const loginOut = (): ThunkType => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        getAuthData()
        dispatch(setIsAuthAC(false))
    }
}

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

export type ThunkType = ThunkAction<void, RootStateType, unknown, AuthActionsType>

export type AuthActionsType =
    | AuthType
    | SetIsAuthType
    | SetIsInitializeType
    | SetAppErrorMessageType

