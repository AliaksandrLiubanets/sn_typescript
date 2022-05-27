import {Navigate} from 'react-router-dom'
import {FC} from 'react'
import {useSelector} from 'react-redux'
import {isAuthSelector} from '../../../../selectors/users-selectors'

export const NavigateToLogin: FC = ({children}) => {
    const isAuth = useSelector(isAuthSelector)
    if (!isAuth) return <Navigate to={'/login'} />
    return <>{children}</>
}