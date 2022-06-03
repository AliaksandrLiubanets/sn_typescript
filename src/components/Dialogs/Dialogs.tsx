import s from './Dialogs.module.css'
import {DialogsItem} from './DialogsItem'
import {Outlet} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {DialogType} from '../Redux/dialogs-reducer'
import p from '../Profile/Profile.module.css'
import {dialogsSelector} from '../../selectors/users-selectors'

export const Dialogs = () => {

    const {dialogs} = useSelector(dialogsSelector)

    const dialogsItems = dialogs.map((d: DialogType) => <DialogsItem key={d.id}
                                                                           name={d.name}
                                                                           id={d.id}
                                                                           ava={d.ava}/>)

    return <div className={`${p.page_block} ${s.dialogs__block} `}>
        <div className={s.dialogs}>
            <h4>DIALOGS</h4>
            {dialogsItems}
        </div>
        <div>
            <Outlet/>
        </div>
    </div>
}


