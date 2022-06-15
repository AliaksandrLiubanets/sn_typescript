import React, {lazy, Suspense} from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import News from './components/News'
import Music from './components/Music'
import Settings from './components/Settings'
import {DialogContainer} from './components/Dialogs/DialogWithUser/Dialog'
import {ProfileWithParam} from './components/Profile/ProfileWithParam'
import ProfileContainer from './components/Profile/ProfileContainer'
import {connect} from 'react-redux'
import {RootStateType} from './components/Redux/redux-store'
import {getAuthData} from './components/Redux/auth-reducer'
import {Spinner} from './components/common/Spinner/Spinner'
import {ErrorWarn} from './components/Error/ErrorWarn'
import {Page404} from './components/Page404/Page404'
import {NavigateToLogin} from './components/common/HOC/NavigateToLogin'
import {Login} from './components/Login/Login'
import {Header} from './components/Header/Header'
import {PATH} from './enums/path'

const Chat = lazy(() => import('./components/Chat/Chat'))
const UsersPage = lazy(() => import('./components/Users/UsersPage'))
const Dialogs = lazy(() => import('./components/Dialogs/Dialogs'))

type AppPropsType = {
    isInitializing: boolean
    getAuthData: () => void
}

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.getAuthData()
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Navbar/>
                <div className="content">
                    {
                        this.props.isInitializing
                            ? <Spinner/>
                            : <Routes>
                                <Route path="/" element={<ProfileContainer/>}/>
                                <Route path={PATH.PROFILE} element={
                                    <NavigateToLogin>
                                        <ProfileContainer/>
                                    </NavigateToLogin>}/>
                                <Route path={PATH.DIALOGS_LIST} element={
                                    <NavigateToLogin>
                                        <Suspense fallback={<div>Loading...</div>}>
                                            <Dialogs/>
                                        </Suspense>
                                    </NavigateToLogin>}>
                                    <Route path={PATH.DIALOG}
                                           element={<DialogContainer/>}/>
                                </Route>
                                <Route path={PATH.USER_PROFILE} element={<ProfileWithParam/>}/>
                                <Route path={PATH.NEWS} element={<News/>}/>
                                <Route path={PATH.MUSIC} element={<Music/>}/>
                                <Route path={PATH.USERS} element={
                                    <NavigateToLogin>
                                        <Suspense fallback={<div>Loading...</div>}>
                                            <UsersPage/>
                                        </Suspense>
                                    </NavigateToLogin>
                                }/>
                                <Route path={PATH.SETTINGS} element={<Settings/>}/>
                                <Route path={PATH.LOGIN} element={<Login/>}/>
                                <Route path={PATH.CHAT} element={<Suspense fallback={<div>Loading...</div>}>
                                    <Chat/>
                                </Suspense>}/>
                                <Route path="*" element={<Page404/>}/>
                            </Routes>
                    }
                </div>
                <ErrorWarn/>
            </div>

        )
    }
}

type MapStateType = {
    isInitializing: boolean
}

const mapStateToProps = (state: RootStateType): MapStateType => {
    return {
        isInitializing: state.app.isInitializing
    }
}

type TDispatchProps = {
    getAuthData: () => void
}

export default connect<MapStateType, TDispatchProps, {}, RootStateType>(mapStateToProps, {getAuthData})(App)
