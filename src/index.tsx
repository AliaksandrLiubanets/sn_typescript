import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {v1} from 'uuid'

export type dialogType = {
    id: string
    name: string
}

export type messageType = {
    id: string
    message: string
}

const messages: messageType[] = [
    {id: v1(), message: "Hello!"},
    {id: v1(), message: "How is your profile on LinkedIn?"},
    {id: v1(), message: "One more request!"},
]

const dialogs:Array<dialogType> = [
    {id: v1(), name: "Dimych"},
    {id: v1(), name: "Andrew"},
    {id: v1(), name: "Lenin"},
    {id: v1(), name: "Pushkin"},
    {id: v1(), name: "Dragunsky"},
    {id: v1(), name: "Ostrovskiy"},
]

export type PostType = {
    id: string
    message: string
    likes: number
}

const messagesData:Array<PostType> = [
    {id: v1(), message: 'hello!', likes: 3},
    {id: v1(), message: 'Hi!', likes: 5},
    {id: v1(), message: 'How is it going?!', likes: 8}
]

ReactDOM.render(
  <React.StrictMode>
    <App messages={messages} dialogs={dialogs} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
