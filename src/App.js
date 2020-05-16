import React from 'react';
import logo from './logo.svg';
import cleandent from './images/cleandent_.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="imgcontain">
                    <img src={cleandent} />
                </div>
                <div className="textcontain">
                    <h1 className="title">Check Back Soon!</h1>
                </div>
            </div>
        </div>
    );
}

export default App;
