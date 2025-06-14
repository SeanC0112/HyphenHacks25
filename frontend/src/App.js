import './App.css';
import React from 'react';
import Background from './background';
import logo from './logo.svg';
import FAQs from './faqs';

function App() {
  return (
    <div className="App">
      <Background />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-intro title-row">
        <h1 className="App-title">Hyphen</h1>
        <h1 className="App-hyphen">-</h1>
        <h1 className="App-title">Hacks</h1>
      </div>
      <FAQs />
      <div className="App-footer">
        <span className="footer-left">Made with ❤️ by the Hyphen-Hacks Team</span>
        <span className="footer-right">© 2025 Hyphen-Hacks</span>
      </div>
    </div>
  );
}

export default App;
