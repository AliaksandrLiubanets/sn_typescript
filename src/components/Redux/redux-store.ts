import {combineReducers, createStore} from 'redux'
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
})

const store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>

export type AppStoreType = typeof store

export type AppDispatch = typeof store.dispatch

export default store