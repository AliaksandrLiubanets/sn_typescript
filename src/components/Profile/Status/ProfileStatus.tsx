import React from 'react'
import s from './Status.module.css'

type StatusProps = {

}

class ProfileStatus extends React.Component<StatusProps> {
    state = {
        isEdit: false
    }
    render () {
        return <div className={s.status}>
            {!this.state.isEdit
                ? <div className={s.status_span}>
                    <span>text</span>
                </div>
                : <div className={s.status_input}></div>
            }
        </div>
    }
}

export default ProfileStatus