import React, {ComponentType} from 'react'
import {RootStateType} from '../Redux/redux-store'
import {connect} from 'react-redux'
import {ProfileType, setStatus} from '../Redux/profile-reducer'
import {Profile} from './Profile'
import {withAuthNavigate} from '../HOC/withAuthNavigate'
import {compose} from 'redux'
import {Params} from 'react-router-dom'
import {ParamsType} from './ProfileWithParam'
import {initializeApp} from '../Redux/app-reducer'


type PropsType = {
    initializeApp: (userId: number) => void
    setStatus: (status: string) => void
    profile: ProfileType | null
    params?:  Readonly<Params<string>>
    isAuth: boolean
    status: string | null
    isInitializing: boolean
    id: number | null
    isLoading: boolean
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.params && this.props.params.userId && Number(this.props.params.userId)
        if (!userId) {
            userId = this.props.id as number
        }
        if (this.props.isAuth) {
            this.props.initializeApp(userId)
        }
    }

    render() {
        return <Profile profile={this.props.profile}
                        status={this.props.status}
                        setStatus={this.props.setStatus}
                        isLoading={this.props.isLoading}
        />
    }
}

type TDispatchProps = {
    setStatus: (status: string) => void
    initializeApp: (userId: number) => void
}


const mapStateToProps = (state: RootStateType): MapStateToPropsType  => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        isInitializing: state.app.isInitializing,
        id: state.auth.data.id,
        isLoading: state.app.isLoading,
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
    status: string | null
    isInitializing: boolean
    id: number | null
    isLoading: boolean
}


export default compose<ComponentType<{ params?: ParamsType }>>(
    withAuthNavigate,
    connect<MapStateToPropsType, TDispatchProps, { params?: ParamsType }, RootStateType>(mapStateToProps,
        {setStatus, initializeApp})
)(ProfileContainer)
