import {AppThunk, InferActionTypes} from './redux-store'
import {profileAPI} from '../../api/api'
import {profileActions} from './profile-reducer'
import {handleServerNetworkError} from '../../utils/handleError'
import {authActions} from './auth-reducer'

export const SET_IS_INITIALIZE = 'sn-typescript/Authorize/SET-IS-INITIALIZE'
export const SET_IS_LOADING = 'sn-typescript/Authorize/SET-IS-LOADING'
export const SET_ERROR_MESSAGE = 'sn-typescript/Authorize/SET-ERROR-MESSAGE'

const initialState = {
    isInitializing: false,
    errorMessage: '',
    isLoading: false
}

const appReducer = (state: StateType = initialState, action: AppActionsType): StateType => {
    switch (action.type) {
        case SET_IS_INITIALIZE:
        case SET_ERROR_MESSAGE:
        case SET_IS_LOADING:
            return {...state, ...action.payload }
        default:
            return state
    }
}

export default appReducer

// actions:
export const appActions = {
    setInitialize: (isInitializing: boolean) => ({type: SET_IS_INITIALIZE, payload: {isInitializing}} as const),
    setIsLoading: (isLoading: boolean) => ({type: SET_IS_LOADING, payload: {isLoading}} as const),
    setAppError: (errorMessage: string) => ({type: SET_ERROR_MESSAGE, payload: {errorMessage}} as const),
}

//thunks:
export const initializeApp = (userId: number): AppThunk => (dispatch) => {
    dispatch(appActions.setIsLoading(true))
    const profileStatus = profileAPI.getStatus(userId)
    const profile = profileAPI.getUserProfile(userId)
    Promise.all([profile, profileStatus])
        .then(result => {
            dispatch(profileActions.setUserProfile(result[0].data))
            dispatch(profileActions.setStatusProfile(result[1].data))
            dispatch(authActions.setIAvatar(result[0].data.photos.small, userId))
        })
        .catch(e => {
            handleServerNetworkError(dispatch, e)
        })
        .finally(() => {
            dispatch(appActions.setIsLoading(false))
        })

}

export const cleanErrorMessages = (): AppThunk => (dispatch) => {
    dispatch(appActions.setAppError(''))
}

// types:
type StateType = typeof initialState
export type AppActionsType = InferActionTypes<typeof appActions>

