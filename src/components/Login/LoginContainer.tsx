import {useSelector} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'
import {ProfileWithParam} from '../Profile/ProfileWithParam'
import {SignupForm} from '../FormikFields/SignupForm'
import React from 'react'

export const LoginContainer = () => {
    const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)

    if (!isAuth) {
        return <SignupForm/>
    }
    return <ProfileWithParam/>
}


