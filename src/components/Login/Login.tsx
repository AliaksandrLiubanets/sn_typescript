import {useSelector} from 'react-redux'
import {LoginFormik} from './LoginFormik'
import React from 'react'
import {Navigate, useLocation} from 'react-router-dom'
import {authSelector} from '../../selectors/users-selectors'

export const Login = () => {
    const {isAuth} = useSelector(authSelector)
    const location: Location = useLocation()
    const state = location.state as StateType
    const fromPage = `${state.from.pathname}${state.from.search}` || '/'

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