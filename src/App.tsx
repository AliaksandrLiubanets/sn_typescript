import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Dialogs from './components/Dialogs/Dialogs'
import {Route, Routes} from 'react-router-dom'
import News from './components/News'
import Music from './components/Music'
import Settings from './components/Settings'
import {DialogContainer} from './components/Dialogs/DialogWithUser/Dialog'
import Users from './components/Users/UsersContainer'
import {ProfileWithParam} from './components/Profile/ProfileWithParam'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import {LoginContainer} from './components/Login/LoginContainer'
import {SignupForm} from './components/FormikFields/SignupForm'


function App() {
    return (
        <div className="App">
            <HeaderContainer/>
            <Navbar/>
            <div className="content">
                <Routes>
                    <Route path="/profile" element={<ProfileContainer />} />
                    <Route path="/dialogs" element={<Dialogs/>}>
                        <Route path="/dialogs/:name"
                               element={<DialogContainer/>}/>
                    </Route>
                    <Route path="/profile/:userId" element={<ProfileWithParam />} />
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/login" element={<LoginContainer/>}/>
                    <Route path="/formik" element={<LoginContainer/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
