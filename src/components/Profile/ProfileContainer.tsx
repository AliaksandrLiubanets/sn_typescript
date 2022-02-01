import React from 'react'
import axios from 'axios'
import {RootStateType} from '../Redux/redux-store'
import {connect} from 'react-redux'
import {ProfileType, setUserProfile} from '../Redux/profile-reducer'
import {Profile} from './Profile'
import {Dispatch} from 'redux'
import {AuthDataType, setAuthData} from '../Redux/auth-reducer'


type PropsType = {
    setUserProfile: (profile: ProfileType) => void
    setAuthData: (data: AuthDataType) => void
    profile: ProfileType | null
    match?: { userId: string }
    isAuth: boolean
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

        let userId = this.props.match && this.props.match.userId
        if (!userId) {
            userId = '2'
        }
        if (this.props.isAuth) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
                .then(response => {
                    this.props.setUserProfile(response.data)
                })
        }

    }

    render() {
        return <Profile {...this.props}/>
    }
}

type TDispatchProps = {
    setUserProfile: (profile: ProfileType) => void
    setAuthData: (data: AuthDataType) => void
}

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

const mapDispatchToProps = (dispatch: Dispatch): TDispatchProps => {
    return {
        setUserProfile: (profile) => dispatch(setUserProfile(profile)),
        setAuthData: (data) => dispatch(setAuthData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
