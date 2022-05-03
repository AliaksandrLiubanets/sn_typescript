import React, {ComponentType} from 'react'
import {RootStateType} from '../Redux/redux-store'
import {connect} from 'react-redux'
import {ProfileType, setStatus} from '../Redux/profile-reducer'
import {Profile} from './Profile'
import {withAuthNavigate} from '../HOC/withAuthNavigate'
import {compose} from 'redux'
import {Params} from 'react-router-dom'
import {ParamsType} from './ProfileWithParam'
import {Spinner} from '../common/Spinner/Spinner'
import {initializeApp} from '../Redux/app-reducer'


type PropsType = {
    // setUserProfile: (userId: number) => void
    // setAuthData: (data: AuthDataType) => void
    // getStatus: (userId: number) => void
    initializeApp: (userId: number) => void
    setStatus: (status: string) => void
    profile: ProfileType | null
    params?:  Readonly<Params<string>>
    isAuth: boolean
    status: string | null
    isInitializing: boolean
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.params && this.props.params.userId && Number(this.props.params.userId)
        if (!userId) {
            userId = 23747
        }
        if (this.props.isAuth) {
            // this.props.setUserProfile(userId)
            // this.props.getStatus(userId)
            this.props.initializeApp(userId)
        }
    }

    render() {
        // return <Profile {...this.props} />
        if(this.props.isInitializing) {
            return <Spinner />
        }
        return <Profile profile={this.props.profile}
                        status={this.props.status}
                        setStatus={this.props.setStatus}
        />
    }
}

type TDispatchProps = {
    // setUserProfile: (userId: number) => void
    // setAuthData: () => void
    setStatus: (status: string) => void
    initializeApp: (userId: number) => void
    // getStatus: (userId: number) => void
}


const mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        isInitializing: state.app.isInitializing,
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
    status: string | null,
    isInitializing: boolean,
}


export default compose<ComponentType<{ params?: ParamsType }>>(
    withAuthNavigate,
    connect<MapStateToPropsType, TDispatchProps, { params?: ParamsType }, RootStateType>(mapStateToProps,
        {setStatus, initializeApp})
)(ProfileContainer)
