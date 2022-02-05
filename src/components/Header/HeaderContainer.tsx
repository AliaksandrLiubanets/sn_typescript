import React from 'react'
import {Header} from './Header'
import {AuthDataType, setAuthData} from '../Redux/auth-reducer'
import {connect} from 'react-redux'
import {AppDispatch, RootStateType} from '../Redux/redux-store'
import {authAPI} from '../../api/api'

type PropsType = {
    login: string | null
    avatar?: string | null
    isAuth: boolean
    setAuthData: (data: AuthDataType) => void
}

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        authAPI.auth()
            .then(response => {
                if(response.data.resultCode === 0) {
                    this.props.setAuthData(response.data.data)
                }
            })
    }

    render () {
        return <Header isAuth={this.props.isAuth} login={this.props.login} />
    }
}

type MapStateProps = {
    login: string | null
    isAuth: boolean
}

type MapDispatchProps = {
    setAuthData: (data: AuthDataType) => void
}

const mapStateToProps = (state: RootStateType): MapStateProps => {
    return {
        login: state.auth.data.login,
        isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchProps => {
    return {
        setAuthData: data => dispatch(setAuthData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

