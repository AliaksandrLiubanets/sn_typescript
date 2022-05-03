import {AppThunk, InferActionTypes} from './redux-store'
import {profileAPI} from '../../api/api'
import {profileActions} from './profile-reducer'

export const SET_IS_INITIALIZE = 'sn-typescript/Authorize/SET-IS-INITIALIZE'
export const SET_ERROR_MESSAGE = 'sn-typescript/Authorize/SET-ERROR-MESSAGE'

const initialState = {
    isInitializing: false,
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
    setIsInitial: (isInitializing: boolean) => ({type: SET_IS_INITIALIZE, payload: {isInitializing}} as const),
    setAppErrorMessage: (errorMessages: string) => ({type: SET_ERROR_MESSAGE, payload: {errorMessages}} as const),
}

//thunks:
export const initializeApp = (userId: number): AppThunk => (dispatch) => {
    dispatch(appActions.setIsInitial(true))
    const profileStatus = profileAPI.getStatus(userId)
    const profile = profileAPI.getUserProfile(userId)
    Promise.all([profileStatus, profile])
        .then(result => {
            console.log('initializeApp result: ', result)
            dispatch(profileActions.setStatusProfile(result[0].data))
            dispatch(profileActions.setUserProfile(result[1].data))
            dispatch(appActions.setIsInitial(false))
        })
        .catch(err => {
            dispatch(appActions.setAppErrorMessage(err.message))
            dispatch(appActions.setIsInitial(false))
        })

    // console.log('promise:', promise)
    // dispatch(profileActions.setStatusProfile(promise[0].data.data))
    // dispatch(profileActions.setUserProfile(promise[1].data.data))
    dispatch(appActions.setIsInitial(false))
}

export const cleanErrorMessages = (): AppThunk => (dispatch) => {
    dispatch(appActions.setAppErrorMessage(''))
}

// types:
type StateType = typeof initialState
export type AppActionsType = InferActionTypes<typeof appActions>

