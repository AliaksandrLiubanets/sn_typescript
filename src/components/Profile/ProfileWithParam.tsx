import {useParams} from 'react-router-dom'
import ProfileContainer from './ProfileContainer'

type PropsType = {}

export function ProfileWithParam(props: PropsType) {
    debugger
    const {match} = useParams()

    return <ProfileContainer match={match} />
}


