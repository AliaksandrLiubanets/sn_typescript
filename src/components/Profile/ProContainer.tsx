import React, {useEffect} from 'react'
import axios from 'axios'
import {RootStateType} from '../Redux/redux-store'
import {connect} from 'react-redux'
import {ProfileType, setUserProfile} from '../Redux/profile-reducer'
import {Profile} from './Profile'
import {Dispatch} from 'redux'


type PropsType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType | null
    userId: {userId: string}
}

function ProContainer (props:PropsType) {

    useEffect(() => {
        const userId = props.userId.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                props.setUserProfile(response.data)
            })
    }, [])

    return <Profile {...props}/>

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

export default connect(mapStateToProps, mapDispatchToProps)(ProContainer)
