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
    const location = useLocation()

    useEffect(() => {
        debugger
        const queryString = require('query-string');
        const parsed: parsedUsersUrlType = queryString.parse(location.search)

        let actualPage = currentPage
        let actualFilter = filter

        if(parsed.page) actualPage = Number(parsed.page)
        if(!!parsed.term) actualFilter = {...actualFilter, term: parsed.term}

        let friend: boolean | null
        switch (parsed.friend) {
            case 'true':
                friend = true
                break
            case 'false':
                friend = false
                break
            default: friend = null
        }
        if(!!parsed.friend) actualFilter = {...actualFilter,
            // friend: parsed.friend === 'true' ? true : (parsed.friend === 'false' ? false : null)
            friend: friend
        }

        dispatch(searchUsers(actualPage, pageSize, actualFilter))
        return () => {
            setSearchToggle(false)
        }
    }, [])

    const url = 'http://localhost:3000/sn_typescript#/users?term=den&friend=true&page=1'

    // useEffect(() => {
    //     navigate({
    //         pathname: '/users',
    //         search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
    //     })
    // }, [filter, currentPage])

    if (!isSearchToggle || isLoading) {
        return <Spinner/>
    }

    return <Users isSearchToggle={isSearchToggle} setSearchToggle={setSearchToggle}/>
})

type parsedUsersUrlType = {
    term?: string
    friend?: string
    page?: string
}
