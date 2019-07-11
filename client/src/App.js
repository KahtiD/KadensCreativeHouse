import React from 'react';
import logo from './images/logo.svg';
import {About, Portfolio, Contact} from './components';
import './App.css';
import Zoom from 'react-reveal/Zoom';
import ReactFullpage from "@fullpage/react-fullpage";
// import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'



const App = (fullpageProps) => (

  <ReactFullpage
    {...fullpageProps}
    render={({ state, fullpageApi }) => {
      return (
          <div>
                <div className="section">
                  <Zoom>
                      <header className="header">
                        <div className="logo">
                          <img src={logo}  alt="logo" />
                        </div>
                        <footer>Kahti N Demba &copy; 2019</footer>
                      </header>
                  </Zoom>
                </div>



              <div className="section">
                <Zoom>
                  <div className="section">
                    <About/>
                  </div>
                </Zoom>
              </div>



              <div className="section">
                <Zoom>
                  <div className="section">
                    <Portfolio/>
                  </div>
                </Zoom>
              </div>



              <div className="section">
                <Zoom>
                  <div className="section">
                    <Contact/>
                  </div>
                </Zoom>
              </div>


          </div>
      );
    }}
  />
);

export default App;
