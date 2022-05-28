import {Navigate, useLocation} from 'react-router-dom'
import {FC} from 'react'
import {useSelector} from 'react-redux'
import {isAuthSelector} from '../../../../selectors/users-selectors'

export const NavigateToLogin: FC = ({children}) => {
    const location = useLocation()
    const isAuth = useSelector(isAuthSelector)

    if (!isAuth) {
        return <Navigate to={'/login'} state={{from: location}}/>
    }

    return <>{children}</>
}