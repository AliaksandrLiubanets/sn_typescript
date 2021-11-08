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
import Dialog from './components/Dialogs/DialogWithUser/Dialog'
import {StoreType} from './components/Redux/store'

type AppProps = {
    store: StoreType
}

function App(props: AppProps) {
    return (
        <div className="App">
            <Header/>
            <Navbar friends={props.store.getState().sidebar.friends}/>
            <div className="content">
                <Route path="/dialogs" render={() => <Dialogs dialogsState={props.store.getState().dialogsPage}/>}/>
                <Route path="/profile" render={() => <Profile state={props.store.getState()}
                                                              addPostText={props.store.addPostText.bind(props.store)}
                                                              setCurrentTextValue={props.store.setCurrentTextValue.bind(props.store)}/>}/>
                <Route path="/dialogs/:name"
                       render={() => <Dialog messages={props.store.getState().dialogsPage.messages}
                                             textareaCurrentValue={props.store.getState().dialogsPage.textareaCurrentValue}
                                             setCurrentTextValueInDialog={props.store.setCurrentTextValueInDialog.bind(props.store)}
                                             addPostTextDialog={props.store.addPostTextDialog.bind(props.store)}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    )
}

export default App
