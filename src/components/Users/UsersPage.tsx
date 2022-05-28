import {useDispatch, useSelector} from 'react-redux'
import {getUsers, usersActions} from '../Redux/users-reducer'
import React, {useCallback, useEffect} from 'react'
import {
    getCurrentPageSelector,
    getIsSearchToggle,
    getPageSizeSelector,
    isLoadingSelector
} from '../../selectors/users-selectors'
import {Spinner} from '../common/Spinner/Spinner'
import {Users} from './Users'

export const UsersPage = React.memo(() => {

    const currentPage = useSelector(getCurrentPageSelector)
    const pageSize = useSelector(getPageSizeSelector)
    const isLoading = useSelector(isLoadingSelector)
    const isSearchToggle = useSelector(getIsSearchToggle)

    const dispatch = useDispatch()
    const setSearchToggle = useCallback((toggle: boolean) => dispatch(usersActions.setSearchToggle(toggle)),[dispatch])

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize))
        return () => {
            setSearchToggle(false)
        }
    }, [dispatch])

    if(!isSearchToggle || isLoading) {
        return <Spinner />
    }

    return <Users isSearchToggle={isSearchToggle} setSearchToggle={setSearchToggle}/>
})
