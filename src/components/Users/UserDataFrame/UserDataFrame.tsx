import s from '../Users.module.css'
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
    return <div className={s.user__dataFrame}>
        <div className={s.user__dataFrame__nameStatus}>
            <div className={s.user__name}>
                {name}
            </div>
            <div className={s.user__status}>
                {status}
            </div>
        </div>
        <div className={s.user__dataFrame__location}>
            <div className={s.user__country}>
                {location ? location.country : `country`}
            </div>
            <div className={s.user__city}>
                {location ? location.city : `city`}
            </div>
        </div>
    </div>
}