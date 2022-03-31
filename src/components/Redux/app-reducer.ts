import {AuthActionsType, getAuthData} from './auth-reducer'
import {ThunkAction} from 'redux-thunk'
import {RootStateType} from './redux-store'

export const SET_IS_INITIALIZE = 'sn-typescript/Authorize/SET-IS-INITIALIZE'

const initialState = {
    isInitialized: false,
}

const appReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case 'sn-typescript/Authorize/SET-IS-INITIALIZE':
            return {...state, isInitialized: action.isInitialized }
        default:
            return state
    }
}

export default appReducer

// actions:
export const setIsInitialAC = (isInitialized: boolean) => ({type: SET_IS_INITIALIZE, isInitialized} as const)

// thunks:
export const initializeApp = (): AppThunkType => async (dispatch) => {
    await dispatch(getAuthData())
    dispatch(setIsInitialAC(true))
}

// types:
type StateType = typeof initialState

export type SetIsInitializeType = ReturnType<typeof setIsInitialAC>
export type AppActionsType = SetIsInitializeType

export type AppThunkType = ThunkAction<void, RootStateType, unknown, ActionsType>

type ActionsType =
    | AuthActionsType
    | AppActionsType
