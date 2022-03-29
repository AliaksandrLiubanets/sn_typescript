import {RootStateType} from '../components/Redux/redux-store'

export const getUsersSelector = (state: RootStateType) => state.usersPage.users
export const getTotalCountSelector = (state: RootStateType) => state.usersPage.totalCount
export const getPageSizeSelector = (state: RootStateType) => state.usersPage.pageSize
export const getCurrentPageSelector = (state: RootStateType) => state.usersPage.currentPage
export const isFetchingSelector = (state: RootStateType) => state.usersPage.isFetching
export const followingInProgressSelector = (state: RootStateType) => state.usersPage.followingInProgress
export const isAuthSelector = (state: RootStateType) => state.auth.isAuth