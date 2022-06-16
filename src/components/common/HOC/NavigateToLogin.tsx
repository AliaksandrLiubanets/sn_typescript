import {Navigate, useLocation} from 'react-router-dom'
import {FC} from 'react'
import {useSelector} from 'react-redux'
import {appSelector, authSelector} from '../../../selectors/selectors'
import {Spinner} from '../Spinner/Spinner'

export const NavigateToLogin: FC = ({children}) => {
    const location = useLocation()
    const {isAuth} = useSelector(authSelector)
    const {isInitializing} = useSelector(appSelector)

    if (isInitializing) {
        return <Spinner />
    }

    if (!isAuth ) {
        return <Navigate to={'/login'}
            state={{from: location}}
        />
    }
    return <>{children}</>
}
