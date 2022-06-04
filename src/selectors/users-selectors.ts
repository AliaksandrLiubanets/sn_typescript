import {RootStateType} from '../components/Redux/redux-store'
import {UserType} from '../components/Redux/users-reducer'
import {createSelector} from 'reselect'

export const getUsersSelector = (state: RootStateType) => state.usersPage.users

export const getUsersNamedSinceMSelector = createSelector(getUsersSelector,
        users => users.filter((user: UserType) =>  user.name[0] === 'M')
)

export const authSelector = (state: RootStateType) => state.auth
export const appSelector = (state: RootStateType) => state.app
export const usersSelector = (state: RootStateType) => state.usersPage
export const dialogsSelector = (state: RootStateType) => state.dialogsPage

