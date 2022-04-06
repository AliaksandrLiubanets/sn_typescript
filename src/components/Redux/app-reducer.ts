import {getAuthData} from './auth-reducer'
import {AppThunk, InferActionTypes} from './redux-store'

export const SET_IS_INITIALIZE = 'sn-typescript/Authorize/SET-IS-INITIALIZE'
export const SET_ERROR_MESSAGE = 'sn-typescript/Authorize/SET-ERROR-MESSAGE'

const initialState = {
    isInitialized: false,
    errorMessages: ''
}

const appReducer = (state: StateType = initialState, action: AppActionsType): StateType => {
    switch (action.type) {
        case SET_IS_INITIALIZE:
        case SET_ERROR_MESSAGE:
            return {...state, ...action.payload }
        default:
            return state
    }
}

export default appReducer

// actions:
export const appActions = {
    setIsInitial: (isInitialized: boolean) => ({type: SET_IS_INITIALIZE, payload: {isInitialized}} as const),
    setAppErrorMessage: (errorMessages: string) => ({type: SET_ERROR_MESSAGE, payload: {errorMessages}} as const),
}

// thunks:
export const initializeApp = (): AppThunk => async (dispatch) => {
    await dispatch(getAuthData())
    dispatch(appActions.setIsInitial(true))
}

export const cleanErrorMessages = (): AppThunk => (dispatch) => {
    dispatch(appActions.setAppErrorMessage(''))
}

// types:
type StateType = typeof initialState
export type AppActionsType = InferActionTypes<typeof appActions>

