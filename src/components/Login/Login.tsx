import {useSelector} from 'react-redux'
import {LoginFormik} from './LoginFormik'
import React from 'react'
import {Navigate, useLocation} from 'react-router-dom'
import {appSelector, authSelector} from '../../selectors/users-selectors'
import {Spinner} from '../common/Spinner/Spinner'

export const Login = () => {
    const {isAuth} = useSelector(authSelector)
    const {isLoading} = useSelector(appSelector)
    const location: Location = useLocation()
    const state = location.state as StateType
    const fromPage = `${state.from.pathname}${state.from.search}` || '/'

    if(!isAuth) {
        if(isLoading) {
            return <Spinner />
        }
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