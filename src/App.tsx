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
import Dialog from './components/Dialogs/DialogWithUser/Dialog'

type AppProps = {
    state: StateType
    addPostText: () => void
    setCurrentTextValueInDialog: (text:string) => void
    setCurrentTextValue: (text:string) => void
    addPostTextDialog: (name: string) => void
}

function App(props: AppProps) {
    return (
        <div className="App">
            <Header/>
            <Navbar friends={props.state.sidebar.friends}/>
            <div className="content">
                <Route path="/dialogs" render={() => <Dialogs dialogsState={props.state.dialogsPage}/>}/>
                <Route path="/profile" render={() => <Profile state={props.state}
                                                              addPostText={props.addPostText}
                                                              setCurrentTextValue={props.setCurrentTextValue}/>}/>
                <Route path="/dialogs/:name"
                       render={() => <Dialog messages={props.state.dialogsPage.messages}
                                             textareaCurrentValue={props.state.dialogsPage.textareaCurrentValue}
                                             setCurrentTextValueInDialog={props.setCurrentTextValueInDialog} addPostTextDialog={props.addPostTextDialog}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    )
}

export default App
