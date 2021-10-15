import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <div className={'content'}>Content</div>
        </div>
    );
}

export default App;
