import React, {useEffect, useState} from 'react'
import s from './Status.module.css'

type StatusProps = {
    status: string
    setStatus: (status: string) => void
}

const ProStatus = (props: StatusProps) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState('')

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onEditMode = () => setEditMode(true)
    const offEditMode = () => {
        props.setStatus(status)
        setEditMode(false)
    }

        return <div className={s.status}>
            {!editMode
                ? <div className={s.status_span}>
                    <span onDoubleClick={onEditMode}>{status}</span>
                </div>
                : <div className={s.status_input}>
                    <input onBlur={offEditMode}
                           onChange={(e)=> setStatus(e.currentTarget.value)}
                           type="text"
                           autoFocus={true}
                           value={status}
                    />
                </div>
            }
        </div>
}

export default ProStatus