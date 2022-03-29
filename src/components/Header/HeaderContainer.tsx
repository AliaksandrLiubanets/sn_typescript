import React from 'react'
import {Header} from './Header'
import {connect} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'

type PropsType = {
    login: string | null
    avatar?: string | null
    isAuth: boolean
    isInitialized: boolean
}

class HeaderContainer extends React.Component<PropsType> {

    render () {
        return <Header isAuth={this.props.isAuth} login={this.props.login} isInitialized={this.props.isInitialized}/>
    }
}

type MapStateProps = {
    login: string | null
    isAuth: boolean
    isInitialized: boolean
}

const mapStateToProps = (state: RootStateType): MapStateProps => {
    return {
        login: state.auth.data.login,
        isAuth: state.auth.isAuth,
        isInitialized: state.app.isInitialized
    }
}

export default connect(mapStateToProps)(HeaderContainer)

// export default compose( // ??? - Maximum update depth exceeded error
//     withAuthNavigate,
//     connect(mapStateToProps, {setAuthData})
// )(HeaderContainer)
