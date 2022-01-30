import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import {DialogsContainer} from './components/Dialogs/Dialogs'
import {Route, Routes} from 'react-router-dom'
import News from './components/News'
import Music from './components/Music'
import Settings from './components/Settings'
import {DialogContainer} from './components/Dialogs/DialogWithUser/Dialog'
import Users from './components/Users/UsersContainer'
import {ProfileWithRouter} from './components/Profile/ProfileWithParam'


function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className="content">
                <Routes>
                    <Route path="/dialogs" element={<DialogsContainer/>}>
                        <Route path="/dialogs/:name"
                               element={<DialogContainer/>}/>
                    </Route>
                    <Route path="/profile/:userId" element={<ProfileWithRouter />} />
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
