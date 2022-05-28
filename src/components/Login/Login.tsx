import {useSelector} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'
import {LoginFormik} from './LoginFormik'
import React from 'react'
import {useLocation, Navigate} from 'react-router-dom'

export const Login = () => {
    const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)
    const location: Location = useLocation()
    const state = location.state as StateType
    const fromPage = state.from.pathname || '/'

    if(!isAuth) {
        return <LoginFormik/>
    }

    return <Navigate to={fromPage}/>
}

interface Location {
    pathname: string;
    search: string;
    hash: string;
    state: unknown;
    key: string;
}

type StateType = {
    from: Location
}