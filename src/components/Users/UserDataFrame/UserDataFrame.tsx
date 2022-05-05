import f from './UserDataFrame.module.css'
import {FC} from 'react'

type UserDataFrameType = {
    name: string
    status: string | null
    location?: {
        city: string
        country: string
    }
}

export const UserDataFrame: FC<UserDataFrameType> = ({name, status, location}) => {

    return <div className={f.user__dataFrame}>
        <div className={f.user__dataFrame__nameStatus}>
            <div className={f.user__name}>
                {name}
            </div>
            <div className={f.user__status}>
                {status}
            </div>
        </div>
        <div className={f.user__dataFrame__location}>
            <div className={f.user__country}>
                {location ? location.country : `country`}
            </div>
            <div className={f.user__city}>
                {location ? location.city : `city`}
            </div>
        </div>
    </div>
}