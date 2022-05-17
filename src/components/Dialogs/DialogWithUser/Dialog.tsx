import s from '../Dialogs.module.css'
import Message from '../Message/Message'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import {RootStateType} from '../../Redux/redux-store'
import {AddDialogPostContainer} from '../AddDialogPostContainer'
import {DialogsPageMessagesType, MessageType} from '../../Redux/dialogs-reducer'


function Dialog(props: MapStatePropsType) {

    const {name} = useParams<string>()

    const avaNameMessage = name && props.messages[name.toLowerCase()].map((m: MessageType) => <Message key={m.id}
                                                                                                       message={m.message}
                                                                                                       name={m.name}
                                                                                                       ava={m.ava}/>)

    return <div className={s.ava_message}>
        <div>{avaNameMessage}</div>
        <AddDialogPostContainer name={name || ''}/>
    </div>
}


type MapStatePropsType = {
    messages: DialogsPageMessagesType
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        messages: state.dialogsPage.messages
    }
}

export const DialogContainer = connect(mapStateToProps)(Dialog)