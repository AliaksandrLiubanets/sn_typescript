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
import {connect} from 'react-redux'
import {RootStateType} from './components/Redux/redux-store'
import {Preloader} from './components/common/Preloader/Preloader'
import {initializeApp} from './components/Redux/app-reducer'
import {ErrorWarn} from './components/Error/ErrorWarn'

type AppPropsType = {
    isInitialized: boolean
    initializeApp: () => void
}

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        return (
            <div className="App">
                <HeaderContainer/>
                <Navbar/>
                <div className="content">
                    {
                        !this.props.isInitialized
                            ? <Preloader/>
                            : <Routes>
                                <Route path="/profile" element={<ProfileContainer/>}/>
                                <Route path="/dialogs" element={<Dialogs/>}>
                                    <Route path="/dialogs/:name"
                                           element={<DialogContainer/>}/>
                                </Route>
                                <Route path="/profile/:userId" element={<ProfileWithParam/>}/>
                                <Route path="/news" element={<News/>}/>
                                <Route path="/music" element={<Music/>}/>
                                <Route path="/users" element={<Users/>}/>
                                <Route path="/settings" element={<Settings/>}/>
                                <Route path="/login" element={<LoginContainer/>}/>
                            </Routes>
                    }
                </div>
                <ErrorWarn />
            </div>
        )
    }
}

type MapStateType = {
    isInitialized: boolean
}

const mapStateToProps = (state: RootStateType): MapStateType => {
    return {
        isInitialized: state.app.isInitialized,
    }
}

type TDispatchProps = {
    initializeApp: () => void
}

export default connect<MapStateType, TDispatchProps, {}, RootStateType>(mapStateToProps,  {initializeApp})(App)
