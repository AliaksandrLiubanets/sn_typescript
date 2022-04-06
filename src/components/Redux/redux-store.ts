import {applyMiddleware, combineReducers, createStore} from 'redux'
import dialogsReducer, {DialogsActionsType} from './dialogs-reducer'
import profileReducer, {ProfileActionsType} from './profile-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer, {UsersAT} from './users-reducer'
import authReducer, {AuthActionsType} from './auth-reducer'
import thunk, {ThunkAction} from 'redux-thunk'
import appReducer, {AppActionsType} from './app-reducer'

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    app: appReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof rootReducer>
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type ActionsType = AppActionsType | AuthActionsType | DialogsActionsType | ProfileActionsType | UsersAT
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, ActionsType>
export type AppStoreType = typeof store

export default store;

//@ts-ignore
window.store = store;