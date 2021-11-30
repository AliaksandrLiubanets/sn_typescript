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

type AppProps = {
    store: AppStoreType
}

function App(props: AppProps) {
    return (
        <div className="App">
            <Header/>
            {/*<Navbar friends={props.store.getState().sidebar.friends}/>*/}
            <Navbar/>
            <div className="content">
                <Routes>
                    {/*<Route path="/dialogs" element={<Dialogs dialogsState={props.store.getState().dialogsPage}/>}>*/}
                    <Route path="/dialogs" element={<Dialogs/>}>
                        <Route path="/dialogs/:name"
                            // element={<Dialog messages={props.store.getState().dialogsPage.messages}
                            //                  textareaCurrentValue={props.store.getState().dialogsPage.textareaCurrentValue}
                            //                  dispatch={props.store.dispatch.bind(props.store)}
                               element={<Dialog/>}/>
                    </Route>
                    <Route path="/profile" element={<Profile store={props.store} />} />
                    {/*<Route path="/profile" element={<Profile/>}/>*/}
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
