import React from 'react'
import store, {AppStoreType} from '../components/Redux/redux-store'

export const StoreContext = React.createContext<AppStoreType>(store)