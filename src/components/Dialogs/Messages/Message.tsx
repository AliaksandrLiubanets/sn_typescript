import s from '../Dialogs.module.css'
type MessagePropsType = {
    message: string
    name: string
    ava: string
}
function Message(props: MessagePropsType) {
    return <div>
        <div className={s.message_ava}><img src={props.ava} alt={'ava'}/></div>
        <div className={s.message_name}>{props.name}</div>
        <div className={s.message_massage}>{props.message}</div>
    </div>
}

export default Message