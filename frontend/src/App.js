import './App.css';
import React, { useRef } from 'react';
import Background from './background';
import logo from './logo.svg';
import Agenda from './agenda';
import FAQs from './faqs';
import Sponsors from './sponsors';

function App() {
  const faqRef = useRef(null);
  const sponsorRef = useRef(null);
  const agendaRef = useRef(null);

  return (
    <div className="App">
      <Background />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-header-buttons">
          <button className='App-button' onClick={() => agendaRef.current?.scrollIntoView({ behavior: 'smooth' })}>
            Agenda
          </button>
          <button className='App-button' onClick={() => faqRef.current?.scrollIntoView({ behavior: 'smooth' })}>
            FAQs
          </button>
          <button className='App-button' onClick={() => sponsorRef.current?.scrollIntoView({ behavior: 'smooth' })}>
            Sponsors
          </button>
        </div>
      </header>
      <div className="App-intro title-row">
        <h1 className="App-title-top">Hyphen</h1>
        <h1 className="App-hyphen">-</h1>
        <h1 className="App-title-bottom">Hacks</h1>
      </div>
      <Agenda ref={agendaRef} />
      <FAQs ref={faqRef} />
      <Sponsors ref={sponsorRef} />
      <div className="App-footer">
        <span className="footer-left">Made with ❤️ by the Hyphen-Hacks Team</span>
        <span className="footer-right">© 2025 Hyphen-Hacks</span>
      </div>
    </div>
  );
}

export default App;
