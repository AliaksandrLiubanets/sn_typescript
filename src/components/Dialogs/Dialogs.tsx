import s from './Dialogs.module.css'
import {DialogsItem} from './DialogsItem'
import {Navigate, Outlet} from 'react-router-dom'
import {connect} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'
import {DialogType} from '../Redux/dialogs-reducer'

function Dialogs(props: MapStatePropsType) {

    const dialogsItems = props.dialogs.map((d: DialogType) => <DialogsItem key={d.id}
                                                                           name={d.name}
                                                                           id={d.id}
                                                                           ava={d.ava}/>)

    // if(!props.isAuth) {
    //     return <Navigate to={'/login'}/>
    // }

    return <div className={s.dialogs__block}>
        { !props.isAuth && <Navigate to={'/login'}/> }
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
    isAuth: boolean
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        isAuth: state.auth.isAuth,
    }
}

export const DialogsContainer = connect(mapStateToProps)(Dialogs)