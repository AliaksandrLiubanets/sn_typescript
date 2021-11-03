import {DialogsPageMessagesType} from '../Redux/state'
import Dialog from './DialogWithUser/Dialog'
import {useParams} from 'react-router-dom'

type DialogContainerPropsType = {
    dialogsState: DialogsPageMessagesType
}

function DialogContainer(props: DialogContainerPropsType) {

    const {name} = useParams<{name: string}>()
    return <div>
        <Dialog dialogsState={props.dialogsState} name={name}/>
        </div>
}

export default DialogContainer