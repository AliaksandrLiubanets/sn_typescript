import React from 'react'
import {Header} from './Header'
import {connect} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'

type PropsType = {
    login: string | null
    avatar: string | null
    isAuth: boolean
    isInitializing: boolean
}

class HeaderContainer extends React.Component<PropsType> {

    render () {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
            isInitializing={this.props.isInitializing}
            avatar={this.props.avatar}
        />
    }
}

type MapStateProps = {
    login: string | null
    isAuth: boolean
    isInitializing: boolean
    avatar: string | null
}

const mapStateToProps = (state: RootStateType): MapStateProps => {
    return {
        login: state.auth.data.login,
        isAuth: state.auth.isAuth,
        isInitializing: state.app.isInitializing,
        avatar: state.auth.ownAvatar
    }
}

export default connect<MapStateProps, {}, {}, RootStateType>(mapStateToProps)(HeaderContainer)
