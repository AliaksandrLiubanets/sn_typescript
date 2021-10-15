import React from 'react';
import empty_avatar from './assets/empty_avatar.jpg'
import './App.css';
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
        <Header />


      <div className={'navbar'}>
          <div>Profile
          </div>
          <div>Message</div>
          <div>News</div>
          <div>Music</div>
          <div>Settings</div>
      </div>
      <div className={'content'}>Content</div>
    </div>
  );
}

export default App;
