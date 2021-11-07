import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import store, {StoreType} from './components/Redux/store'

let rerenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store)

export default rerenderEntireTree