import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import state, {
    addPostText,
    addPostTextDialog,
    setCurrentTextValue,
    setCurrentTextValueInDialog, StateType,
} from './components/Redux/state'
import {BrowserRouter} from 'react-router-dom'

let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPostText={addPostText}
                     setCurrentTextValueInDialog={setCurrentTextValueInDialog}
                     setCurrentTextValue={setCurrentTextValue} addPostTextDialog={addPostTextDialog}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

rerenderEntireTree(state)

export default rerenderEntireTree