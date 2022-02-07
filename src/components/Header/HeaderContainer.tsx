import React from 'react'
import {Header} from './Header'
import {setAuthData} from '../Redux/auth-reducer'
import {connect} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'

type PropsType = {
    login: string | null
    avatar?: string | null
    isAuth: boolean
    setAuthData: () => void
}

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.setAuthData()
    }

    render () {
        return <Header isAuth={this.props.isAuth} login={this.props.login} />
    }
}

type MapStateProps = {
    login: string | null
    isAuth: boolean
}

// type MapDispatchProps = {
//     setAuthData: () => void
// }

const mapStateToProps = (state: RootStateType): MapStateProps => {
    return {
        login: state.auth.data.login,
        isAuth: state.auth.isAuth,
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => {
//     return {
//         setAuthData: () => dispatch(setAuthData())
//     }
// }

export default connect(mapStateToProps, {setAuthData})(HeaderContainer)

