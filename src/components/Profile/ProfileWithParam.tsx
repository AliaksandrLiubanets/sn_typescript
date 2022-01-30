import {useParams} from 'react-router-dom'
import ProContainer from './ProContainer'

type PropsType = {}

export function ProfileWithParam(props: PropsType) {
    debugger
    const match = useParams<string>()

    return <ProContainer match={match} />
}


