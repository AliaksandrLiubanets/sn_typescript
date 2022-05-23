import React from 'react'
import {Header} from './Header'
import {connect} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'

type PropsType = {
    login: string | null
    avatar: string | null
    isAuth: boolean
    isInitializing: boolean
    isLoading: boolean
}

class HeaderContainer extends React.Component<PropsType> {

    render () {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
            isInitializing={this.props.isInitializing}
            avatar={this.props.avatar}
            isLoading={this.props.isLoading}
        />
    }
}

type MapStateProps = {
    login: string | null
    isAuth: boolean
    isInitializing: boolean
    avatar: string | null
    isLoading:  boolean
}

const mapStateToProps = (state: RootStateType): MapStateProps => {
    return {
        login: state.auth.data.login,
        isAuth: state.auth.isAuth,
        isInitializing: state.app.isInitializing,
        avatar: state.auth.ownAvatar,
        isLoading: state.app.isLoading,
    }
}

export default connect<MapStateProps, {}, {}, RootStateType>(mapStateToProps)(HeaderContainer)
