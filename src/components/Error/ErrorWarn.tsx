import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'
import {cleanErrorMessages} from '../Redux/app-reducer'

export const ErrorWarn = () => {

    const errMessages = useSelector<RootStateType, string>(state => state.app.errorMessage)
    const dispatch = useDispatch()

    const cleanErrorMessage = () => dispatch(cleanErrorMessages())

    return <div>
        {
            errMessages
                ? <div>{errMessages}</div>
                : null
        }
        <button onClick={cleanErrorMessage}>CleanError</button>
    </div>
}