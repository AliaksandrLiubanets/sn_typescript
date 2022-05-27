import {useDispatch, useSelector} from 'react-redux'
import {getUsers} from '../Redux/users-reducer'
import React, {useEffect} from 'react'
import {
    getCurrentPageSelector,
    getPageSizeSelector,
    getSearchParams,
    isLoadingSelector
} from '../../selectors/users-selectors'
import {Spinner} from '../common/Spinner/Spinner'
import {Users} from './Users'

export const UsersPage = () => {

    const currentPage = useSelector(getCurrentPageSelector)
    const pageSize = useSelector(getPageSizeSelector)
    const filter = useSelector(getSearchParams)
    const isLoading = useSelector(isLoadingSelector)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize, filter))
    }, [])

    if(isLoading) {
        return <Spinner />
    }

    return <Users />
}

// export default compose<ComponentType>(
//     withAuthNavigate,
//     // connect(mapStateToProps, {
//     //     // follow,
//     //     // unfollow,
//     //     // setCurrentPage,
//     //     getUsers
//     // })
// )(UsersPage)