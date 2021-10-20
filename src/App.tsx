import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom'
import News from './components/News'
import Music from './components/Music'
import Settings from './components/Settings'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className='content'>
                    <Route path='/dialogs' component={Dialogs} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />

                </div>
                {/*<Profile />*/}
            </div>
        </BrowserRouter>
    )
}

export default App
