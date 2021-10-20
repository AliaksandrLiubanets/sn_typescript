import s from './Dialogs.module.css'

function Dialogs() {
    return <div className={s.dialogs}>
        <div className={s.dialogsItem}>
            <div>Dimych</div>
            <div>Andrew</div>
            <div>Platon</div>
            <div>Aleksandr</div>
            <div>Maks</div>
            <div>Sveta</div>
        </div>
        <div className={s.messages}>
            <div>Hello!</div>
            <div>How is it going?</div>
            <div>Yo!</div>
        </div>
    </div>
}

export default Dialogs