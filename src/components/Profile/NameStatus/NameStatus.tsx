import s from './NameStatus.module.css'
import ProStatus from '../Status/ProStatus'
import React, {FC} from 'react'

type NameStatusPropsType = {
    name: string | null
    status: string | null
    setStatus: (status: string) => void
}

export const NameStatus: FC<NameStatusPropsType> = ({name, status, setStatus}) => {
    return (
        <div className={s.name_status}>
            <div className={s.profileInfo_name}>
                <span>{name}</span>
            </div>
            <ProStatus status={status} setStatus={setStatus}/>
        </div>
    )
}