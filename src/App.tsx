import React from 'react';
import empty_avatar from './assets/empty_avatar.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className={'header'}>
          <img src={empty_avatar}/>
      </div>
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
