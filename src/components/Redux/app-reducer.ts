import {AppThunk, InferActionTypes} from './redux-store'

export const SET_IS_INITIALIZE = 'sn-typescript/App/SET-IS-INITIALIZE'
export const SET_IS_LOADING = 'sn-typescript/App/SET-IS-LOADING'
export const SET_ERROR_MESSAGE = 'sn-typescript/App/SET-ERROR-MESSAGE'

const initialState = {
    isInitializing: false,
    errorArray: [] as string[],
    isLoading: false
}

const appReducer = (state: AppStateType = initialState, action: AppActionsType): AppStateType => {
    switch (action.type) {
        case SET_IS_INITIALIZE:
        case SET_IS_LOADING:
            return {...state, ...action.payload }
        case SET_ERROR_MESSAGE:
            return {...state, errorArray: action.errorArray }
        default:
            return state
    }
}

export default appReducer

// actions:
export const appActions = {
    setInitialize: (isInitializing: boolean) => ({type: SET_IS_INITIALIZE, payload: {isInitializing}} as const),
    setIsLoading: (isLoading: boolean) => ({type: SET_IS_LOADING, payload: {isLoading}} as const),
    setAppError: (errorArray: string[]) => ({type: SET_ERROR_MESSAGE, errorArray} as const),
}

export const cleanErrorMessages = (): AppThunk => (dispatch) => {
    dispatch(appActions.setAppError([]))
}

// types:
export type AppStateType = typeof initialState
export type AppActionsType = InferActionTypes<typeof appActions>

