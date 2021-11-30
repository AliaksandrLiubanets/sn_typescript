import s from './Dialogs.module.css'
import {DialogsItem} from './DialogsItem'
import {DialogsPageMessagesType, DialogType} from '../Redux/store'
import {Outlet} from 'react-router-dom'
import {StoreContext} from '../../StoreContext/StoreContext'

export type DialogsStateType = {
    // messages: DialogsPageMessagesType
    // dialogs: Array<DialogType>
}

type  DialogsPropsType = {
    // dialogsState: DialogsStateType
}

function Dialogs(props: DialogsPropsType) {

    return <StoreContext.Consumer>
        { store => {
            const dialogsItems = store?.getState().dialogsPage.dialogs.map((d: DialogType) => <DialogsItem key={d.id} name={d.name}
                                                                                                           id={d.id} ava={d.ava}/>)
            return <div className={s.dialogs__block}>
                <div className={s.dialogs}>
                    <h4>DIALOGS</h4>
                    {dialogsItems}
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
        }

        }
    </StoreContext.Consumer>
}

export default Dialogs