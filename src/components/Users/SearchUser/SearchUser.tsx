import {Button} from '../../common/Button/Button'
import s from './SearchUser.module.css'
import React, {ChangeEvent, FC, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUsers, SearchType} from '../../Redux/users-reducer'
import {RootStateType} from '../../Redux/redux-store'
import {Select} from '../../common/Select/Select'
import {Textarea} from '../../common/Textarea/Textarea'

type PropsType = {
    searchParams: SearchType
}

const friendArray = ['all', 'subscribed', 'unsubscribed']

export const SearchUser: FC<PropsType> = ({searchParams}) => {

    const reduxFriend = useSelector<RootStateType, boolean | null>(state => state.usersPage.searchParams.friend)
    const pageSize = useSelector<RootStateType, number>(state => state.usersPage.pageSize)
    const dispatch = useDispatch()

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

    let isFriend: boolean | null
    if(friend === 'subscribed') {
        isFriend = true
    } else if (friend === 'unsubscribed') {
        isFriend = false
    } else {
        isFriend = null
    }

    const search = () => dispatch(getUsers(1, pageSize, name, isFriend))
    const onChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => setName(e.currentTarget.value)
    const onEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => e.key === 'Enter' && search()

    return <div className={s.search_block}>
        <Textarea placeholder={'search user by name'} onChangeValue={onChangeValue} value={name} onEnterPress={onEnter}/>
        <Select options={friendArray} onChangeOption={setFriend} value={friend}/>
        <Button label={'Search'} onClickHandler={search}/>
    </div>
}