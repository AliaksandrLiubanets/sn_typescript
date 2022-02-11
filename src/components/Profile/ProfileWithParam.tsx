import {Params, useParams} from 'react-router-dom'
import ProfileContainer from './ProfileContainer'

export type ParamsType =  Readonly<Params<string>>

export function ProfileWithParam() {
    let params = useParams()

    return <ProfileContainer params={params} />
}


