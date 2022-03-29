import React from 'react'
import {Header} from './Header'
import {getAuthData} from '../Redux/auth-reducer'
import {connect} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'

type PropsType = {
    login: string | null
    avatar?: string | null
    isAuth: boolean
    getAuthData: () => void
}

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getAuthData()
    }

    render () {
        return <Header isAuth={this.props.isAuth} login={this.props.login} />
    }
}

type MapStateProps = {
    login: string | null
    isAuth: boolean
}

const mapStateToProps = (state: RootStateType): MapStateProps => {
    return {
        login: state.auth.data.login,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {getAuthData})(HeaderContainer)

// export default compose( // ??? - Maximum update depth exceeded error
//     withAuthNavigate,
//     connect(mapStateToProps, {setAuthData})
// )(HeaderContainer)
