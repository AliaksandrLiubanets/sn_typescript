import React, {useEffect, useState} from 'react'
import s from './Status.module.css'

type StatusProps = {
    status: string  | null
    setStatus: (status: string) => void
    isOwner: boolean
}

const ProStatus = React.memo((props: StatusProps) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState<string | null>('')

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onEditMode = () => {
        if(props.isOwner) {
            setEditMode(true)
        }
    }

    const offEditMode = () => {
        status && props.setStatus(status)
        setEditMode(false)
    }

    const statusStyle = props.isOwner ? `${s.status_span}` : ''

        return <div className={s.status}>
            {!editMode
                ? <div className={statusStyle}>
                    <span onClick={onEditMode}>{status || 'status'}</span>
                </div>
                : <div className={s.status_input}>
                    <input onBlur={offEditMode}
                           onChange={(e)=> setStatus(e.currentTarget.value)}
                           type="text"
                           autoFocus={true}
                           value={status || ""}
                    />
                </div>
            }
        </div>
})

export default ProStatus