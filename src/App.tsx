import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import {Route} from 'react-router-dom'
import News from './components/News'
import Music from './components/Music'
import Settings from './components/Settings'
import {StateType} from './components/Redux/state'
import DialogWithUser from './components/Dialogs/DialogWithUser/DialogWithUser'

type AppProps = {
    state: StateType
}

function App(props: AppProps) {
    return (
        <div className="App">
            <Header/>
            <Navbar friends={props.state.sidebar.friends}/>
            <div className="content">
                <Route path="/dialogs" render={() => <Dialogs dialogsState={props.state.dialogsPage}/>}/>
                <Route path="/profile" render={() => <Profile profileState={props.state.profilePage}/>}/>
                <Route path="/dialogs/:id"
                       render={() => <DialogWithUser dialogsState={props.state.dialogsPage}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    )
}

export default App
