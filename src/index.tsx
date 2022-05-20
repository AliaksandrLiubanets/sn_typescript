import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {HashRouter} from 'react-router-dom'
import store from './components/Redux/redux-store'
import {Provider} from 'react-redux'


ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
// ReactDOM.render(
//         <HashRouter>
//             <Provider store={store}>
//                 <App/>
//             </Provider>
//         </HashRouter>,
//     document.getElementById('root')
// )
