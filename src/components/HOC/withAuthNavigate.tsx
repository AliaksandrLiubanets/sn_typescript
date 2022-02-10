import React, {ComponentType} from 'react'
import {Navigate} from 'react-router-dom'
import {RootStateType} from '../Redux/redux-store'
import {connect} from 'react-redux'

type MapStateProps = {
    isAuth: boolean
}

const mapStateToProps = (state: RootStateType): MapStateProps => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export function withAuthNavigate<T>(Component: ComponentType<T>) {
    debugger
    const NavigateComponent = (props: MapStateProps) => {
        const {isAuth, ...rest} = props
        if(!isAuth) {
            return <Navigate to={'/login'} />
        }
        return <Component {...rest as T} />
    }
    return connect(mapStateToProps)(NavigateComponent)
}