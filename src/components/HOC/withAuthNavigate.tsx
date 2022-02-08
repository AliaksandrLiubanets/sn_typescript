import React from 'react'
import {Navigate} from 'react-router-dom'
import {RootStateType} from '../Redux/redux-store'
import {connect} from 'react-redux'

type MapStateProps = {isAuth: boolean}
const mapStateToProps = (state: RootStateType): MapStateProps => {
    return {isAuth: state.auth.isAuth}
}

export const withAuthNavigate = (Component: any) => {
    class NavigateComponent extends React.Component<any> {
        render () {
            if(!this.props.isAuth) {
                return <Navigate to={'/login'} />
            }
            return <Component {...this.props}/>
        }
    }

    // let ConnectedComponent = connect(mapStateToProps)(NavigateComponent)

    return connect(mapStateToProps)(NavigateComponent)
}