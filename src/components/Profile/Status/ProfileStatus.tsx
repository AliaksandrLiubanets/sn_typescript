import React from 'react'
import s from './Status.module.css'

type StatusProps = {
    status: string
}

class ProfileStatus extends React.Component<StatusProps> {
    state = {
        isEdit: false,
        status: this.props.status,
    }

    onEditMode = () => {
        this.setState(() => {
            return {isEdit: true}
        })
    }

    offEditMode() {
        this.setState({
            isEdit: false
        })
    }

    render() {
        return <div className={s.status}>
            {!this.state.isEdit
                ? <div className={s.status_span}>
                    <span onDoubleClick={this.onEditMode}>{this.props.status}</span>
                </div>
                : <div className={s.status_input}>
                    <input onBlur={this.offEditMode.bind(this)} type="text" autoFocus={true} value={this.props.status}/>
                </div>
            }
        </div>
    }
}

export default ProfileStatus