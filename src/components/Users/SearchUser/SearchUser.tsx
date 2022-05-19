import {InputField} from '../../common/InputField/InputField'
import {Button} from '../../common/Button/Button'
import {Checkbox} from '../../common/Checkbox/Checkbox'
import s from './SearchUser.module.css'
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUsers} from '../../Redux/users-reducer'
import {RootStateType} from '../../Redux/redux-store'

export const SearchUser = () => {

    const [checked, setChecked] = useState<boolean>(false)
    const [name, setName] = useState<string>('')

    const currentPage = useSelector<RootStateType, number>(state => state.usersPage.currentPage)
    const pageSize = useSelector<RootStateType, number>(state => state.usersPage.pageSize)


    const dispatch = useDispatch()

    const search = () => {
        // console.log(currentPage, pageSize, name, checked)
        dispatch(getUsers(currentPage, pageSize, name, checked))
    }

    return <div className={s.search_block}>
        <InputField placeholder={'search user by name'} onChangeText={setName}/>
        <Checkbox children={'only subscribed'} onChangeChecked={setChecked}/>
        <Button label={'Search'} onClickHandler={search}/>
    </div>
}