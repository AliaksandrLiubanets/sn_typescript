import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'
import {ProfileWithParam} from '../Profile/ProfileWithParam'
import {SignupForm} from '../FormikFields/SignupForm'
import React from 'react'
import {login, LoginPayloadType} from '../Redux/auth-reducer'

export const LoginContainer = () => {
    const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()

    const dispatchFormValue = (values: LoginPayloadType) => {
        dispatch(login(values))
    }
    if (!isAuth) {
        // return <SignupForm login={dispatchFormValue}/>
        return <SignupForm/>
    }
    return <ProfileWithParam/>
}

// export const LoginContainer = () => {
//
//     const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)
//
//     return <LoginWithIsAuth isAuth={isAuth}/>
// }
//
// const LoginWithIsAuth = React.memo(({isAuth}: { isAuth: boolean }) => {
//     if (!isAuth) {
//         return <SignupForm />
//     }
//     return <ProfileWithParam/>
// })


