import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import state, {addPostText, setCurrentTextValueInDialog} from './components/Redux/state'
import {BrowserRouter} from 'react-router-dom'

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPostText={addPostText} setCurrentTextValueInDialog={setCurrentTextValueInDialog} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

rerenderEntireTree()

reportWebVitals()

export default rerenderEntireTree