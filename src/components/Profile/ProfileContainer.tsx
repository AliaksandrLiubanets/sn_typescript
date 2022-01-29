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
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        // const userId = this.props.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                debugger
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
    userId: any
}

const mapStateToProps = (state: RootStateType, ownProps: TOwnProps) => {
    return {
        profile: state.profilePage.profile,
        userId: ownProps.userId,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): TDispatchProps => {
    return {
        setUserProfile: (profile) => dispatch(setUserProfile(profile))
    }
}

// export default connect<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>(mapStateToProps, {setUserProfile})(ProfileContainer)
//
// export default connect<TStateProps, TDispatchProps, TOwnProps, RootStateType>
//     // @ts-ignore
// (mapStateToProps, {setUserProfile})(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
