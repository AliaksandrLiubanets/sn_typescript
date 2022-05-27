import User from './User'
import React from 'react'
import p from '../Profile/Profile.module.css'
import {Paginator} from '../common/Paginator/Paginator'
import {SearchForm} from './SearchUser/SearchForm'
import {NoUsersFound} from './SearchUser/NoUsers/NoUsersFound'
import s from './Users.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {
    followingInProgressSelector,
    getCurrentPageSelector,
    getPageSizeSelector,
    getSearchParams,
    getTotalCountSelector,
    getUsersSelector
} from '../../selectors/users-selectors'
import {setCurrentPage} from '../Redux/users-reducer'

export const Users = () => {

    const users = useSelector(getUsersSelector)
    const totalCount = useSelector(getTotalCountSelector)
    const currentPage = useSelector(getCurrentPageSelector)
    const pageSize = useSelector(getPageSizeSelector)
    const filter = useSelector(getSearchParams)
    const followingInProgress = useSelector(followingInProgressSelector)

    const dispatch = useDispatch()

    const onSetCurrentPage = () => {
        dispatch(setCurrentPage(currentPage))
    }


    const usersArr = users.map(u => <User key={u.id}
                                                  id={u.id}
                                                  name={u.name}
                                                  status={u.status}
                                                  followed={u.followed}
                                                  location={u.location ? u.location : undefined}
                                                  photos={u.photos}
                                                  // follow={this.props.follow}
                                                  // unfollow={this.props.unfollow}
                                                  followingInProgress={followingInProgress}
    />)

  return (
      <div className={p.page_block}>
          <Paginator setCurrentPage={onSetCurrentPage}
                     itemsTotalCount={totalCount}
                     page={currentPage}
                     pageSize={pageSize}
          />
          <SearchForm searchParams={filter}/>
          {
              usersArr.length === 0
                  ? <NoUsersFound/>
                  : <div className={s.users__content}>
                      {usersArr}
                  </div>
          }
      </div>
  )
}