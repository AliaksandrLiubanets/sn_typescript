import {InputField} from '../../common/InputField/InputField'
import {Button} from '../../common/Button/Button'
import s from './SearchUser.module.css'
import {FC, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUsers, SearchType} from '../../Redux/users-reducer'
import {RootStateType} from '../../Redux/redux-store'
import {Checkbox} from '../../common/Checkbox/Checkbox'

type PropsType = {
    searchParams: SearchType
}

export const SearchUser: FC<PropsType> = ({searchParams}) => {
    const [checked, setChecked] = useState<boolean | null>(searchParams.friend)
    const [name, setName] = useState<string>(searchParams.term)

    const pageSize = useSelector<RootStateType, number>(state => state.usersPage.pageSize)

    const dispatch = useDispatch()

    const search = () => {
        dispatch(getUsers(1, pageSize, name, checked))
    }

    return <div className={s.search_block}>
        <InputField placeholder={'search user by name'} onChangeText={setName}/>
        <Checkbox children={'only subscribed'} onChangeChecked={setChecked}/>
        <Button label={'Search'} onClickHandler={search}/>
    </div>
}