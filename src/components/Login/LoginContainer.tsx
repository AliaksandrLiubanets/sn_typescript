import {Login} from './Login'
import {useSelector} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'
import {ProfileWithParam} from '../Profile/ProfileWithParam'

export const LoginContainer = () => {
    const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)
    if(!isAuth) {
        return <Login />
    }
    return <ProfileWithParam />
}

