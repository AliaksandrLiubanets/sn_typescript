import {useParams} from 'react-router-dom'
import ProContainer from './ProContainer'

type PropsType = {}

export function ProfileWithRouter(props: PropsType) {
    const userId = useParams<string>()
    return <ProContainer userId={userId} />
}


