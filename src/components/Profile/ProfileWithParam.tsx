import {useParams} from 'react-router-dom'
import ProContainer from './ProContainer'

type PropsType = {}

export function ProfileWithParam(props: PropsType) {
    const userId = useParams<string>()
    return <ProContainer userId={userId} />
}


