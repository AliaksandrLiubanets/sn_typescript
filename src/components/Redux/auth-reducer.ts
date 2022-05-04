import {authAPI} from '../../api/api'
import {AppThunk, InferActionTypes} from './redux-store'
import {appActions} from './app-reducer'
import {Dispatch} from 'redux'
import {profileActions} from './profile-reducer'
import axios from 'axios'

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

const authReducer = (state: StateType = initialState, action: AuthActionsType): StateType => {
    switch (action.type) {
        case SET_AUTH_DATA:
        case SET_IS_AUTH:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default authReducer

// actions:
export const authActions = {
    setAuthData: (data: AuthDataType) => ({type: SET_AUTH_DATA, payload: {data}} as const),
    setIsAuth: (isAuth: boolean) => ({type: SET_IS_AUTH, payload: {isAuth}} as const),
}

// thunks:
export const getAuthData = () => (dispatch: Dispatch) => {
    dispatch(appActions.setInitialize(true))
        authAPI.me()
            .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(authActions.setAuthData(response.data.data))
                dispatch(authActions.setIsAuth(true))
                dispatch(appActions.setInitialize(false))
            } else {
                dispatch(appActions.setAppErrorMessage(response.data.messages[0]))
                dispatch(appActions.setInitialize(false))
            }
        })
            .catch(err => {
                if (axios.isAxiosError(err) && err.response) {
                    dispatch(appActions.setAppErrorMessage(err.response.data.message))
                }
            })
    // finally {
    //     dispatch(appActions.setInitialize(false))
    // }
}

export const login = (payload: LoginPayloadType): AppThunk => (dispatch) => {
    dispatch(appActions.setIsLoading(true))
    return authAPI.login(payload)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthData())
                dispatch(appActions.setIsLoading(false))
            } else {
                if (response.data.messages.length) {
                    const error: string = response.data.messages[0]
                    dispatch(appActions.setAppErrorMessage(error))
                    console.warn(error)
                    dispatch(appActions.setIsLoading(false))
                }
            }
        })
        .catch(err => {
            console.warn('Some error')
            console.log(err.message)
            dispatch(appActions.setAppErrorMessage(err.message))
            dispatch(appActions.setIsLoading(false))
        })
        // .finally(() => {
        //     dispatch(appActions.setInitialize(false))
        // })
}

export const loginOut = (): AppThunk => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(authActions.setIsAuth(false))
        dispatch(profileActions.setUserProfile(null))
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
}

export type LoginPayloadType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: boolean
}
type StateType = typeof initialState
export type AuthActionsType = InferActionTypes<typeof authActions>


