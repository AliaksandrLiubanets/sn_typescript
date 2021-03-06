import {User} from './User'
import React, {FC, useCallback} from 'react'
import p from '../Profile/Profile.module.css'
import {Paginator} from '../common/Paginator/Paginator'
import {SearchForm} from './SearchUser/SearchForm'
import {NoUsersFound} from './SearchUser/NoUsers/NoUsersFound'
import s from './Users.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {usersSelector} from '../../selectors/selectors'
import {setCurrentPage} from '../Redux/users-reducer'

type UsersProps = {
    isSearchToggle: boolean
}

export const Users: FC<UsersProps> = React.memo(({isSearchToggle}) => {

    const {users, filter, totalCount, currentPage, pageSize, followingInProgress} = useSelector(usersSelector)
    const dispatch = useDispatch()
    const onSetCurrentPage = useCallback((page: number) => dispatch(setCurrentPage(page)), [dispatch])

    const usersArr = users.map(u => <User key={u.id}
                                                  id={u.id}
                                                  name={u.name}
                                                  status={u.status}
                                                  followed={u.followed}
                                                  location={u.location ? u.location : undefined}
                                                  photos={u.photos}
                                                  followingInProgress={followingInProgress}
    />)

  return (
      <div className={p.page_block}>
          <Paginator setCurrentPage={onSetCurrentPage}
                     itemsTotalCount={totalCount}
                     page={currentPage}
                     pageSize={pageSize}
          />
          <SearchForm searchParams={filter} />
          {
              isSearchToggle && usersArr.length === 0
                  ? <NoUsersFound/>
                  : <div className={s.users__content}>
                      {usersArr}
                  </div>
          }
      </div>
  )
})
