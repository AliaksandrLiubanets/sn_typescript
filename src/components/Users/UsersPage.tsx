import {useDispatch, useSelector} from 'react-redux'
import {searchUsers, usersActions} from '../Redux/users-reducer'
import React, {useCallback, useEffect} from 'react'
import {
    getCurrentPageSelector,
    getIsSearchToggle,
    getPageSizeSelector,
    getSearchParams,
    isLoadingSelector
} from '../../selectors/users-selectors'
import {Spinner} from '../common/Spinner/Spinner'
import {Users} from './Users'
import {useLocation, useNavigate} from 'react-router-dom'


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

    const queryString = require('query-string')

    useEffect(() => {
        const parsed: QueryType = queryString.parse(location.search)

        let actualPage = currentPage
        let actualFilter = filter

        if (parsed.page) actualPage = Number(parsed.page)
        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term}

        let friend: boolean | null
        switch (parsed.friend) {
            case 'true':
                friend = true
                break
            case 'false':
                friend = false
                break
            default:
                friend = null
        }
        if (!!parsed.friend) actualFilter = {
            ...actualFilter,
            friend: friend
        }

        dispatch(searchUsers(actualPage, pageSize, actualFilter))
        return () => {
            setSearchToggle(false)
        }
    }, [dispatch])

    useEffect(() => {
        const query: QueryType = {}
        if (!!filter.term) query.term = filter.term
        if (!!filter.friend) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)

        navigate({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])

    if (!isSearchToggle || isLoading) {
        return <Spinner/>
    }

    return <Users isSearchToggle={isSearchToggle} setSearchToggle={setSearchToggle}/>
})

type QueryType = {
    term?: string
    friend?: string
    page?: string
}
