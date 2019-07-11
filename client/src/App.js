import React from 'react';
import logo from './images/logo.svg';
import {About, Portfolio, Contact} from './components';
import './App.css';
import Zoom from 'react-reveal/Zoom';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'




function App() {

  return (
    <Fullpage>
      <div>
        <FullPageSections>
            <FullpageSection>
              <Zoom>
                  <header className="header">
                    <div className="logo">
                      <img src={logo}  alt="logo" />
                    </div>
                    <footer>Kahti N Demba &copy; 2019</footer>
                  </header>
              </Zoom>
            </FullpageSection>

          <FullpageSection style={{paddingTop: "75px"}}>
            <Zoom>
              <div>
                <About/>
              </div>
            </Zoom>
          </FullpageSection>


          <FullpageSection style={{paddingTop: "70px"}}>
            <Zoom>
              <div>
                <Portfolio/>
              </div>
            </Zoom>
          </FullpageSection>

          <FullpageSection style={{paddingTop: "45px"}}>
            <Zoom>
              <div>
                <Contact/>
              </div>
            </Zoom>
          </FullpageSection>

        </FullPageSections>
      </div>
    </Fullpage>
  );
}

export default App;
