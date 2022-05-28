import {RootStateType} from '../components/Redux/redux-store'
import {UserType} from '../components/Redux/users-reducer'
import {createSelector} from 'reselect'

export const getUsersSelector = (state: RootStateType) => state.usersPage.users

export const getUsersNamedSinceMSelector = createSelector(getUsersSelector,
        users => users.filter((user: UserType) =>  user.name[0] === 'M')
)

export const getTotalCountSelector = (state: RootStateType) => state.usersPage.totalCount
export const getPageSizeSelector = (state: RootStateType) => state.usersPage.pageSize
export const getCurrentPageSelector = (state: RootStateType) => state.usersPage.currentPage
export const isFetchingSelector = (state: RootStateType) => state.usersPage.isFetching
export const followingInProgressSelector = (state: RootStateType) => state.usersPage.followingInProgress
export const isAuthSelector = (state: RootStateType) => state.auth.isAuth
export const getSearchParams = (state: RootStateType) => state.usersPage.searchParams
export const getIsSearchToggle = (state: RootStateType) => state.usersPage.isSearchToggle
export const isLoadingSelector = (state: RootStateType) => state.app.isLoading

export const getDialogs = (state: RootStateType) => state.dialogsPage.dialogs
