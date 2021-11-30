import s from '../Dialogs.module.css'
import Message from '../Message/Message'
import {useParams} from 'react-router-dom'
import {ActionsTypes, DialogsPageMessagesType} from '../../Redux/store'
import AddDialogPostContainer from '../AddDialogPostContainer'
import {StoreContext} from '../../../StoreContext/StoreContext'

type DialogPropsType = {
    // messages: DialogsPageMessagesType
    // textareaCurrentValue: string
    // dispatch: (action: ActionsTypes) => void
}

function Dialog(props: DialogPropsType) {

    const {name} = useParams<string>()

    return <StoreContext.Consumer>
        { store => {
            const avaNameMessage = name && store.getState().dialogsPage.messages[name.toLowerCase()].map(m => <Message key={m.id} message={m.message} name={m.name} ava={m.ava}/>)
            return <div className={s.ava_message}>
                <div>{avaNameMessage}</div>
                <AddDialogPostContainer name={name}/>
            </div>
        }

        }
    </StoreContext.Consumer>
}

export default Dialog