import {AuthActionsType, getAuthData} from './auth-reducer'
import {ThunkAction} from 'redux-thunk'
import {RootStateType} from './redux-store'

export const SET_IS_INITIALIZE = 'sn-typescript/Authorize/SET-IS-INITIALIZE'
export const SET_ERROR_MESSAGE = 'sn-typescript/Authorize/SET-ERROR-MESSAGE'

const initialState = {
    isInitialized: false,
    errorMessages: ''
}

const appReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case SET_IS_INITIALIZE:
            return {...state, isInitialized: action.isInitialized }
        case SET_ERROR_MESSAGE:
            return {...state, errorMessages: action.errorMessages }
        default:
            return state
    }
}

export default appReducer

// actions:
export const setIsInitialAC = (isInitialized: boolean) => ({type: SET_IS_INITIALIZE, isInitialized} as const)
export const setAppErrorMessageAC = (errorMessages: string) => ({type: SET_ERROR_MESSAGE, errorMessages} as const)

// thunks:
export const initializeApp = (): AppThunkType => async (dispatch) => {
    await dispatch(getAuthData())
    dispatch(setIsInitialAC(true))
}

export const cleanErrorMessages = (): AppThunkType => (dispatch) => {
    dispatch(setAppErrorMessageAC(''))
}

// types:
type StateType = typeof initialState

export type SetIsInitializeType = ReturnType<typeof setIsInitialAC>
export type SetAppErrorMessageType = ReturnType<typeof setAppErrorMessageAC>

export type AppActionsType = SetIsInitializeType | SetAppErrorMessageType

export type AppThunkType = ThunkAction<void, RootStateType, unknown, ActionsType>

type ActionsType =
    | AuthActionsType
    | AppActionsType
