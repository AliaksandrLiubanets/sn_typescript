import React, {ComponentType} from 'react'
import {RootStateType} from '../Redux/redux-store'
import {connect} from 'react-redux'
import {getProfileData, ProfileType, setStatus, uploadPhoto} from '../Redux/profile-reducer'
import {Profile} from './Profile'
import {compose} from 'redux'
import {Params} from 'react-router-dom'
import {ParamsType} from './ProfileWithParam'


type PropsType = {
    getProfileData: (userId: number) => void
    setStatus: (status: string) => void
    uploadPhoto: (photo: File) => void
    profile: ProfileType | null
    params?: Readonly<Params<string>>
    isAuth: boolean
    status: string | null
    id: number | null
    isLoading: boolean
}

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.params && this.props.params.userId && Number(this.props.params.userId)
        if (!userId) {
            userId = this.props.id as number
        }
        if (this.props.isAuth) {
            this.props.getProfileData(userId)
        }
    }

    componentDidMount() {
        console.log('componentDidMount - profile')
        this.refreshProfile()
    }

    // componentDidUpdate(prevProps: Readonly<PropsType>) {
    //     console.log('componentDidUpdate - profile')
    //     if(this.props.params && prevProps.params) {
    //         if(this.props.params.userId !== prevProps.params.userId) {
    //             this.refreshProfile()
    //         }
    //     }
    // }

    render() {
        let userId = this.props.params && this.props.params.userId && Number(this.props.params.userId)
        if (!userId) {
            userId = this.props.id as number
        }
        const isOwner = this.props.id === userId

        return <Profile profile={this.props.profile}
                        status={this.props.status}
                        setStatus={this.props.setStatus}
                        isLoading={this.props.isLoading}
                        uploadPhoto={this.props.uploadPhoto}
                        isOwner={isOwner}
        />
    }
}

type TDispatchProps = {
    setStatus: (status: string) => void
    getProfileData: (userId: number) => void
    uploadPhoto: (photo: File) => void
}


const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        id: state.auth.data.id,
        isLoading: state.app.isLoading
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
    status: string | null
    id: number | null
    isLoading: boolean
}


export default compose<ComponentType<{ params?: ParamsType }>>(
    // withAuthNavigate,
    connect<MapStateToPropsType, TDispatchProps, { params?: ParamsType }, RootStateType>(mapStateToProps,
        {setStatus, getProfileData, uploadPhoto})
)(ProfileContainer)
