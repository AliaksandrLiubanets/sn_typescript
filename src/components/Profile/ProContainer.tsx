import React, {useEffect} from 'react'
import axios from 'axios'
import {RootStateType} from '../Redux/redux-store'
import {connect} from 'react-redux'
import {ProfileType, setUserProfileAC} from '../Redux/profile-reducer'
import {Profile} from './Profile'
import {Dispatch} from 'redux'


type PropsType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType | null
    match: {userId: string}
}

function ProContainer (props:PropsType) {

    debugger

    useEffect(() => {
        const userId = props.match.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                props.setUserProfile(response.data)
            })
    }, [])

    return <Profile status={"I'm free"} {...props}/>

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
        setUserProfile: (profile) => dispatch(setUserProfileAC(profile))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProContainer)
