import {useDispatch, useSelector} from 'react-redux'
import {searchUsers, usersActions} from '../Redux/users-reducer'
import React, {useCallback, useEffect} from 'react'
import {appSelector, usersSelector} from '../../selectors/users-selectors'
import {Spinner} from '../common/Spinner/Spinner'
import {Users} from './Users'
import {useNavigate, useSearchParams} from 'react-router-dom'


export const UsersPage = React.memo(() => {
    const {filter, currentPage, pageSize, isSearchToggle} = useSelector(usersSelector)
    const {isLoading} = useSelector(appSelector)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const setSearchToggle = useCallback((toggle: boolean) => dispatch(usersActions.setSearchToggle(toggle)), [dispatch])

    const [searchParams, setSearchParams] = useSearchParams({})

    useEffect(() => {
        const parsed: QueryType = Object.fromEntries(searchParams)
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
        let query: QueryType = {}

        if (!!filter.term) query.term = filter.term
        if(filter.friend === null) {
            query = {...query}
        } else {
            query.friend = String(filter.friend)
        }

        if (currentPage !== 1) query.page = String(currentPage)

        const queryString = require('query-string')

        navigate({
            pathname: '/users',
            search: queryString.stringify(query)
        })
        setSearchParams(query)

    }, [filter, currentPage])

    if (!isSearchToggle || isLoading) {
        return <Spinner/>
    }

    return <Users isSearchToggle={isSearchToggle} />
})

type QueryType = {
    term?: string
    friend?: string
    page?: string
}
