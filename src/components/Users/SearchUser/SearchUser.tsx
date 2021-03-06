import {Button} from '../../common/Button/Button'
import s from './SearchUser.module.css'
import React, {FC, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {SearchType, searchUsers} from '../../Redux/users-reducer'
import {Select} from '../../common/Select/Select'
import {Textarea} from '../../common/Textarea/Textarea'
import {usersSelector} from '../../../selectors/selectors'

type PropsType = {
    searchParams: SearchType
}

const friendArray = ['all', 'subscribed', 'unsubscribed']

export const SearchUser: FC<PropsType> = ({searchParams}) => {

    const reduxFriend = useSelector(usersSelector).filter.friend
    const {pageSize} = useSelector(usersSelector)
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

    const search = () => dispatch(searchUsers(1, pageSize, {term, friend}))
    const setMessage = (value: string) => setTerm(value)

    return <div className={s.search_block}>
        <Textarea placeholder={'search user by name'} setMessage={setMessage} value={term} isOnEnterPress={true} addMessage={search}/>
        <Select options={friendArray} onChangeOption={setFriendValue} value={friendValue}/>
        <Button label={'Search'} onClickSubmit={search}/>
    </div>
}