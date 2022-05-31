import {useDispatch, useSelector} from 'react-redux'
import {getUsers, SearchType, searchUsers, usersActions} from '../Redux/users-reducer'
import React, {useCallback, useEffect} from 'react'
import {
    getCurrentPageSelector,
    getIsSearchToggle,
    getPageSizeSelector, getSearchParams,
    isLoadingSelector
} from '../../selectors/users-selectors'
import {Spinner} from '../common/Spinner/Spinner'
import {Users} from './Users'
import {useNavigate, createSearchParams, useLocation} from 'react-router-dom'

export const UsersPage = React.memo(() => {

    const currentPage = useSelector(getCurrentPageSelector)
    const pageSize = useSelector(getPageSizeSelector)
    const isLoading = useSelector(isLoadingSelector)
    const isSearchToggle = useSelector(getIsSearchToggle)
    const filter = useSelector(getSearchParams)

    const dispatch = useDispatch()
    const setSearchToggle = useCallback((toggle: boolean) => dispatch(usersActions.setSearchToggle(toggle)), [dispatch])

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize))
        return () => {
            setSearchToggle(false)
        }
    }, [])

    useEffect(() => {
        navigate({
            pathname: '/users',
            search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
        })
    }, [filter, currentPage])

    if (!isSearchToggle || isLoading) {
        return <Spinner/>
    }

    return <Users isSearchToggle={isSearchToggle} setSearchToggle={setSearchToggle}/>
})
