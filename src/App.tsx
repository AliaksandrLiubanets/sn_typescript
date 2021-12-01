import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import {Route, Routes} from 'react-router-dom'
import News from './components/News'
import Music from './components/Music'
import Settings from './components/Settings'
import Dialog from './components/Dialogs/DialogWithUser/Dialog'
import {AppStoreType} from './components/Redux/redux-store'


function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className="content">
                           </div>
        </div>
    )
}

export default App
