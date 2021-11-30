import {combineReducers, createStore} from 'redux'
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

const store = createStore(rootReducer)

export type rootStateType = ReturnType<typeof rootReducer>

export type AppStoreType = typeof store

export type AppDispatch = typeof store.dispatch

export default store