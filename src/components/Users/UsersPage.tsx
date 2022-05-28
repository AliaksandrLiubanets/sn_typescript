import {useDispatch, useSelector} from 'react-redux'
import {getUsers} from '../Redux/users-reducer'
import React, {useEffect, useState} from 'react'
import {
    getCurrentPageSelector,
    getPageSizeSelector,
    getUsersSelector,
    isLoadingSelector
} from '../../selectors/users-selectors'
import {Spinner} from '../common/Spinner/Spinner'
import {Users} from './Users'

export const UsersPage = () => {
    const [isOnSearchClick, setIsOnSearchClick] = useState(false)

    const currentPage = useSelector(getCurrentPageSelector)
    const pageSize = useSelector(getPageSizeSelector)
    const isLoading = useSelector(isLoadingSelector)
    const users = useSelector(getUsersSelector)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize))
    }, [dispatch])

    if((!isOnSearchClick && users.length === 0) || isLoading) {
        return <Spinner />
    }

    return <Users isOnSearchClick={isOnSearchClick} setIsOnSearchClick={setIsOnSearchClick}/>
}
