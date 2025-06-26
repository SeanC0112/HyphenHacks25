import './App.css';
import React, { useRef } from 'react';
import Background from './background';
import logo from './logo.svg';
import Agenda from './agenda';
import Judges from './judges';
import Photos from './photos';
import FAQs from './faqs';
import Sponsors from './sponsors';
import Organizers from './organizers';
import About from './about';

function App() {
  const faqRef = useRef(null);
  const sponsorRef = useRef(null);
  const agendaRef = useRef(null);
  const judgesRef = useRef(null);
  const organizersRef = useRef(null);
  const aboutRef = useRef(null);
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      {width > 700 ? (
        <>
          <Background />
          <header className="App-header">
            <a
              href="https://forms.gle/GXSsVBFoPZdE1HnNA"
              target="_blank"
              rel="noopener noreferrer"
              className="App-signup-header"
              style={{ textDecoration: "none" }}
            >
              Sign Up!
            </a>
            <div className="App-header-buttons">
              <button className='App-button' onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                About
              </button>
              <button className='App-button' onClick={() => agendaRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                Agenda
              </button>
              <button className='App-button' onClick={() => faqRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                FAQs
              </button>
              <button className='App-button' onClick={() => judgesRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                Judges
              </button>
              <button className='App-button' onClick={() => sponsorRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                Sponsors
              </button>
              {/* <button className='App-button' onClick={() => organizersRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                Organizers
              </button> */}
            </div>
          </header>
          <div className="App-intro title-row">
            <h1 className="App-title-top">Hyphen</h1>
            <h1 className="App-hyphen">-</h1>
            <h1 className="App-title-bottom">Hacks</h1>
            <div className='App-intro-footer'>
              <span className='App-intro-footer-left'>September 27th, 2025</span>
              <a
                href="https://www.google.com/maps/place/Lick+Wilmerding+High+School/@37.7227779,-122.4518189,17z/data=!3m1!4b1!4m6!3m5!1s0x808f7c2a56b75bb5:0x72b2d521bc242bb4!8m2!3d37.7227779!4d-122.449244!16zL20vMDZicHpi?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className='App-intro-footer-right'>Lick-Wilmerding High School</span>
              </a>
            </div>
          </div>
          <div className='App-gradient'></div>
          <div className='App-info'>
             <a
              href="https://forms.gle/GXSsVBFoPZdE1HnNA"
              target="_blank"
              rel="noopener noreferrer"
              className="App-signup"
              style={{ textDecoration: "none" }}
            >
              Sign Up!
            </a>
            <About ref={aboutRef} />
            <Agenda ref={agendaRef} />
            <FAQs ref={faqRef} />
            <Photos />
            <Judges ref={judgesRef} />
            <Sponsors ref={sponsorRef} />
            <Organizers ref={organizersRef} />
          </div>
          <div className="App-footer">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="footer-left">Made with ❤️ by the Hyphen-Hacks Team</span>
            <span className="footer-right">© 2025 Hyphen-Hacks</span>
          </div>
        </>
      ) : (
        <p>{width}</p>
      )}
    </div>
  );
}

export default App;
