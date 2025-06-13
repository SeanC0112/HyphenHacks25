import './App.css';
import React from 'react';
import Background from './background';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Background />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
