import React from 'react'
import {RootStateType} from '../Redux/redux-store'
import {connect} from 'react-redux'
import {ProfileType, setUserProfile} from '../Redux/profile-reducer'
import {Profile} from './Profile'
import {AuthDataType, setAuthData} from '../Redux/auth-reducer'


type PropsType = {
    setUserProfile: (userId: number) => void
    setAuthData: (data: AuthDataType) => void
    profile: ProfileType | null
    match?: { userId: string }
    isAuth: boolean
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

        let userId = this.props.match && Number(this.props.match.userId)
        if (!userId) {
            userId = 2
        }
        if (this.props.isAuth) {
            this.props.setUserProfile(userId)
        }

    }

    render() {
        return <Profile {...this.props}/>
    }
}

// type TDispatchProps = {
//     setUserProfile: (userId: number) => void
//     setAuthData: () => void
// }

type TOwnProps = {
    match?: any
}

const mapStateToProps = (state: RootStateType, ownProps: TOwnProps) => {
    return {
        profile: state.profilePage.profile,
        match: ownProps.match,
        isAuth: state.auth.isAuth
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): TDispatchProps => {
//     return {
//         setUserProfile: (userId) => dispatch(setUserProfile(userId)),
//         setAuthData: () => dispatch(setAuthData())
//     }
// }

export default connect(mapStateToProps, {setUserProfile, setAuthData})(ProfileContainer)
