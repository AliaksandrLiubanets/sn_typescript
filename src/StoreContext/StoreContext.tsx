import React from 'react'
import {AppStoreType} from '../components/Redux/redux-store'

export const StoreContext = React.createContext<AppStoreType | null>(null)