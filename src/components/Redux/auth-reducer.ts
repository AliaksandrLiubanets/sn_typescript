import {Dispatch} from 'redux'
import {authAPI} from '../../api/api'

export const SET_AUTH_DATA = 'sn-typescript/Authorize/SET-AUTH-DATA'
export const SET_IS_AUTH = 'sn-typescript/Authorize/SET-IS-AUTH'

export type AuthDataType = {
    id: string | null
    email: string | null
    login: string | null
}

type AuthStateType = {
    data: AuthDataType
    isAuth: boolean
}

export type LoginPayloadType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: boolean
}

const initialState: AuthStateType = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false,
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

export type AuthType = ReturnType<typeof setAuthDataAC>
export type SetIsAuthType = ReturnType<typeof setIsAuthAC>

// type AuthType = {
//     type: typeof SET_AUTH_DATA
//     data: AuthDataType
// }

export type AuthActionsType = AuthType | SetIsAuthType

export const setAuthDataAC = (data: AuthDataType) => ({type: SET_AUTH_DATA, data} as const)
export const setIsAuthAC = (isAuth: boolean) => ({type: SET_IS_AUTH, isAuth} as const)
// export const setAuthDataAC = (data: AuthDataType): AuthType => ({type: SET_AUTH_DATA, data})

export const setAuthData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthDataAC(response.data.data))
                dispatch(setIsAuthAC(true))
            }
        })
}

export const login = (payload: LoginPayloadType) => () => {
    authAPI.login(payload)
        .then(response => {
            if(response.data.resultCode === 0) {
                setAuthData()
            }
        })
}

export const loginOut = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            if(response.data.resultCode === 0) {
                setAuthData()
                dispatch(setIsAuthAC(false))
            }
        })
}

export default authReducer