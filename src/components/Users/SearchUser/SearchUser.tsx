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

    const [term, setTerm] = useState<string>(searchParams.term)
    const [friendValue, setFriendValue] = useState<string>(initialfriend)

    useEffect(() => {
        setTerm(searchParams.term)
    }, [searchParams.term])

    let friend: boolean | null
    if(friendValue === 'subscribed') {
        friend = true
    } else if (friendValue === 'unsubscribed') {
        friend = false
    } else {
        friend = null
    }

    const search = () => dispatch(getUsers(1, pageSize, {term, friend}))
    const onChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => setTerm(e.currentTarget.value)
    const onEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => e.key === 'Enter' && search()

    return <div className={s.search_block}>
        <Textarea placeholder={'search user by name'} onChangeValue={onChangeValue} value={term} onEnterPress={onEnter}/>
        <Select options={friendArray} onChangeOption={setFriendValue} value={friendValue}/>
        <Button label={'Search'} onClickHandler={search}/>
    </div>
}