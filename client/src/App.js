import React, { useState } from 'react';
import light_logo from './images/logo.svg';
import dark_logo from './images/darklogo.svg';
import {About, Portfolio, Contact} from './components';
import './App.scss';
import Zoom from 'react-reveal/Zoom';
// import ReactFullpage from "@fullpage/react-fullpage";





function App(props) {

  const [mode, setMode] = useState(getInitialMode());
  React.useEffect( () => {
    localStorage.setItem('mode', JSON.stringify(mode));
  }, [mode])

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem('mode'));
    return savedMode || false;
  }






          return (
              <div className={ mode ? "dark_App" : "App"}>
                    <div className="section">
                      <Zoom>
                          <header className={ mode ? "dark_header" :"header"} id="top">
                          { mode ?
                            <button className="mode" onClick={() => setMode(prevMode => !prevMode)}>
                              <span style={{writingMode: "vertical-rl", width: "100%"}}>Night Mode</span>
                            </button>
                            :
                            <button className="mode" onClick={() => setMode(prevMode => !prevMode)}>
                              <span style={{writingMode: "vertical-rl", width: "100%"}}>Day Mode</span>
                            </button>
                          }
                            <div className="logo">
                              <img src={ mode ? dark_logo : light_logo}  alt="logo" />
                            </div>
                            <footer>Kahti N Demba &copy; 2019</footer>
                          </header>
                      </Zoom>
                    </div>

                  <div className="section">
                    <Zoom>
                      <div className="section">
                        <About modeChange={mode} />
                        </div>
                    </Zoom>
                  </div>

                  <div className="section">
                    <Zoom>
                      <div className="section">
                        <Portfolio modeChange={mode} />
                      </div>
                    </Zoom>
                  </div>

                  <div className="section">
                    <Zoom>
                      <div className="section">
                        <Contact modeChange={mode}/>
                      </div>
                    </Zoom>
                  </div>
            </div>
          );
}





export default App;
