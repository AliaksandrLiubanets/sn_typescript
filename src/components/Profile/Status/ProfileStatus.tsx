import React, {ChangeEvent} from 'react'
import s from './Status.module.css'

type StatusProps = {
    status: string
    setStatus: (status: string) => void
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
        this.props.setStatus(this.state.status)
    }

    onChange = (e: ChangeEvent<HTMLInputElement>) => this.setState({status: e.currentTarget.value})

    componentDidUpdate(prevProps: Readonly<StatusProps>, prevState: Readonly<{}>) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div className={s.status}>
            {!this.state.isEdit
                ? <div className={s.status_span}>
                    <span onDoubleClick={this.onEditMode}>{this.state.status || '---'}</span>
                </div>
                : <div className={s.status_input}>
                    <input onBlur={this.offEditMode.bind(this)}
                           onChange={this.onChange}
                           type="text"
                           autoFocus={true}
                           value={this.state.status}/>
                </div>
            }
        </div>
    }
}

export default ProfileStatus