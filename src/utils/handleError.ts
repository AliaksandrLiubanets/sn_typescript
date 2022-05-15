import axios from 'axios';
import {Dispatch} from 'redux';
import {appActions, AppActionsType} from '../components/Redux/app-reducer'

export const handleServerNetworkError = (dispatch: Dispatch<AppActionsType>, e: Error) => {
    if (axios.isAxiosError(e)) {
        dispatch(appActions.setAppError(e.response ? e.response.data.error : e.message))
    } else {
        dispatch(appActions.setAppError(['Some error occurred']))
    }
}