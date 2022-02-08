import s from './Dialogs.module.css'
import {DialogsItem} from './DialogsItem'
import {Outlet} from 'react-router-dom'
import {connect} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'
import {DialogType} from '../Redux/dialogs-reducer'
import {withAuthNavigate} from '../HOC/withAuthNavigate'

function Dialogs(props: MapStatePropsType) {

    const dialogsItems = props.dialogs.map((d: DialogType) => <DialogsItem key={d.id}
                                                                           name={d.name}
                                                                           id={d.id}
                                                                           ava={d.ava}/>)


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

type MapStatePropsType = {
    dialogs: Array<DialogType>
    // isAuth: boolean
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        // isAuth: state.auth.isAuth,
    }
}

const DialogsWithNavigateToLogin = withAuthNavigate(Dialogs)

export const DialogsContainer = connect(mapStateToProps)(DialogsWithNavigateToLogin)