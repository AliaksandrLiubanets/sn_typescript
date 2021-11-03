import s from '../Dialogs.module.css'
import Dialog from '../Dialog/Dialog'
import {DialogsPageMessagesType} from '../../Redux/state'
import TextareaField from '../TextareaField'

type DialogWithUserPropsType = {
    dialogsState: DialogsPageMessagesType
}

function DialogWithUser(props: DialogWithUserPropsType) {

    const avaNameMessage = props.dialogsState.ostrovskiy.map(m => <Dialog key={m.id} message={m.message} name={m.name} ava={m.ava}/>)


    return <div className={s.ava_message}>
        <div>{avaNameMessage}</div>
        <TextareaField/>
    </div>
}

export default DialogWithUser