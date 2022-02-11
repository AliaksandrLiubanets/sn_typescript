import React, {ComponentType} from 'react'
import {RootStateType} from '../Redux/redux-store'
import {connect} from 'react-redux'
import {ProfileType, getStatus, setUserProfile, setStatus} from '../Redux/profile-reducer'
import {Profile} from './Profile'
import {AuthDataType, setAuthData} from '../Redux/auth-reducer'
import {withAuthNavigate} from '../HOC/withAuthNavigate'
import {compose} from 'redux'
import { Params } from 'react-router-dom'
import {ParamsType} from './ProfileWithParam'


type PropsType = {
    setUserProfile: (userId: number) => void
    setAuthData: (data: AuthDataType) => void
    getStatus: (userId: number) => void
    setStatus: (status: string) => void
    profile: ProfileType | null
    params?:  Readonly<Params<string>>
    isAuth: boolean
    status: string | null
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.params && this.props.params.userId && Number(this.props.params.userId)
        if (!userId) {
            userId = 16602
        }
        if (this.props.isAuth) {
            this.props.setUserProfile(userId)
            this.props.getStatus(userId)
        }

    }

    render() {
        return <Profile {...this.props} />
    }
}

type TDispatchProps = {
    setUserProfile: (userId: number) => void
    setAuthData: () => void
    setStatus: (status: string) => void
    getStatus: (userId: number) => void
}


const mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): TDispatchProps => {
//     return {
//         setUserProfile: (userId) => dispatch(setUserProfile(userId)),
//         setAuthData: () => dispatch(setAuthData())
//     }
// }

type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
    status: string | null,
}


export default compose<ComponentType<{ params?: ParamsType }>>(
    withAuthNavigate,
    connect<MapStateToPropsType, TDispatchProps, { params?: ParamsType }, RootStateType>(mapStateToProps, {setUserProfile, setAuthData, setStatus, getStatus})
)(ProfileContainer)
