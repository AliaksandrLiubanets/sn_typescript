import s from './Dialogs.module.css'
import {DialogsItem} from './DialogsItem'
import {Outlet} from 'react-router-dom'
import {connect, useSelector} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'
import {DialogType} from '../Redux/dialogs-reducer'
import {compose} from 'redux'
import {ComponentType} from 'react'
import p from '../Profile/Profile.module.css'
import {getDialogs} from '../../selectors/users-selectors'

function Dialogs() {

    const dialogs = useSelector(getDialogs)

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

type MapStatePropsType = {
    dialogs: Array<DialogType>
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
    }
}

export default compose<ComponentType>(
    // withAuthNavigate,
    connect(mapStateToProps))
(Dialogs)

