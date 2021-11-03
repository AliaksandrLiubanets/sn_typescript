import s from './Dialog.module.css'
type DialogPropsType = {
    message: string
    name: string
    ava: string
}
function Dialog(props: DialogPropsType) {
    return <div className={s.message_block}>
        <div className={s.ava_name_message}>
            <div className={s.message_ava}><img src={props.ava} alt={'ava'}/></div>
            <div className={s.message_name}>{props.name}</div>
        </div>
        <div className={s.angle}></div>
        <div className={s.message_massage}>{props.message}</div>
    </div>
}

export default Dialog