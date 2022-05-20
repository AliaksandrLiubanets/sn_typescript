import {InputField} from '../../common/InputField/InputField'
import {Button} from '../../common/Button/Button'
import s from './SearchUser.module.css'
import {FC, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUsers, SearchType} from '../../Redux/users-reducer'
import {RootStateType} from '../../Redux/redux-store'
import {Select} from '../../common/Select/Select'

type PropsType = {
    searchParams: SearchType
}

const friendArray = ['all', 'subscribed', 'unsubscribed']

export const SearchUser: FC<PropsType> = ({searchParams}) => {

    const reduxFriend = useSelector<RootStateType, boolean | null>(state => state.usersPage.searchParams.friend)

    let initialfriend: 'all' | 'subscribed' |'unsubscribed'
    if(reduxFriend === true) {
        initialfriend = 'subscribed'
    } else if (reduxFriend === false) {
        initialfriend = 'unsubscribed'
    } else {
        initialfriend = 'all'
    }

    const [name, setName] = useState<string>(searchParams.term)
    const [friend, setFriend] = useState<string>(initialfriend)

    useEffect(() => {
        setName(searchParams.term)
    }, [searchParams.term])

    const pageSize = useSelector<RootStateType, number>(state => state.usersPage.pageSize)

    const dispatch = useDispatch()

    let isFriend: boolean | null
    if(friend === 'subscribed') {
        isFriend = true
    } else if (friend === 'unsubscribed') {
        isFriend = false
    } else {
        isFriend = null
    }

    const search = () => {
        dispatch(getUsers(1, pageSize, name, isFriend))
    }

    return <div className={s.search_block}>
        <InputField placeholder={'search user by name'} onChangeText={setName} value={name} onEnter={search}/>
        <Select options={friendArray} onChangeOption={setFriend} value={friend}/>
        <Button label={'Search'} onClickHandler={search}/>
    </div>
}