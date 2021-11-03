import {DialogsPageMessagesType} from '../Redux/state'
import Dialog from './DialogWithUser/Dialog'

type DialogContainerPropsType = {
    dialogsState: DialogsPageMessagesType
}

function DialogContainer(props: DialogContainerPropsType) {


    return <div>
        <Dialog dialogsState={props.dialogsState}/>
        </div>
}

export default DialogContainer