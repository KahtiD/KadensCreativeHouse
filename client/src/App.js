import React from 'react';
import logo from './images/logo.svg';
import {About, Portfolio, Contact} from './components';
import './App.css';
import Zoom from 'react-reveal/Zoom';
// import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';




function App() {

  return (
      <div>

              <Zoom>
                  <header className="header">
                    <div className="logo">
                      <img src={logo}  alt="logo" />
                    </div>
                  </header>
              </Zoom>



            <Zoom>
              <div>
                <About/>
              </div>
            </Zoom>




            <Zoom>
              <div>
                <Portfolio/>
              </div>
            </Zoom>


            <Zoom>
              <div>
                <Contact/>
              </div>
            </Zoom>



      </div>

  );
}

export default App;
