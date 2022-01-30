import React from 'react'
import axios from 'axios'
import {RootStateType} from '../Redux/redux-store'
import {connect} from 'react-redux'
import {ProfileType, setUserProfile} from '../Redux/profile-reducer'
import {Profile} from './Profile'
import {Dispatch} from 'redux'


type PropsType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType | null
    match: {userId: string}
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        const userId = this.props.match.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile {...this.props}/>
    }
}

type TDispatchProps = {
    setUserProfile: (profile: ProfileType) => void
}

type TOwnProps = {
    match: any
}

const mapStateToProps = (state: RootStateType, ownProps: TOwnProps) => {
    return {
        profile: state.profilePage.profile,
        match: ownProps.match,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): TDispatchProps => {
    return {
        setUserProfile: (profile) => dispatch(setUserProfile(profile))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
