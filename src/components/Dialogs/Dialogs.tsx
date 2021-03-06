import s from './Dialogs.module.css'
import {DialogsItem} from './DialogsItem'
import {Outlet} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {DialogType} from '../Redux/dialogs-reducer'
import p from '../Profile/Profile.module.css'
import {appSelector, dialogsSelector} from '../../selectors/selectors'
import {Spinner} from '../common/Spinner/Spinner'

const Dialogs = () => {

    const {dialogs} = useSelector(dialogsSelector)
    const {isLoading} = useSelector(appSelector)

    const dialogsItems = dialogs.map((d: DialogType) => <DialogsItem key={d.id}
                                                                     name={d.author}
                                                                     id={d.id}
                                                                     ava={d.url}/>)

    return <>
        {
            isLoading
                ? <Spinner/>
                : <div className={`${p.page_block} ${s.dialogs__block} `}>
                    <div className={s.dialogs}>
                        <h4>DIALOGS</h4>
                        {dialogsItems}
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </div>
        }

    </>
}

export default Dialogs


