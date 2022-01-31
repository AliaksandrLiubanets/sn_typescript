import {useParams} from 'react-router-dom'
import ProfileContainer from './ProfileContainer'

type PropsType = {}

export function ProfileWithParam(props: PropsType) {
    const match = useParams<string>()

    return <ProfileContainer match={match} />
}


