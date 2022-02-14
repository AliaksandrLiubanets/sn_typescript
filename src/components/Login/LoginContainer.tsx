import {Login} from './Login'
import {useSelector} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'
import {ProfileWithParam} from '../Profile/ProfileWithParam'
import {LoginFormik} from './LoginFormik'

export const LoginContainer = () => {
    const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)
    if(!isAuth) {
        return <LoginFormik />
    }
    return <ProfileWithParam />
}

