import React, { Component } from 'react';
import './about.css';
import aboutText from '../../images/aboutText.svg';
// import ReactFullpage from '@fullpage/react-fullpage';

//import {} from '../../components';
// import {Link} from 'react-router-dom';





export class About extends Component {
  constructor(props) {
   super(props);

   this.state = {

   }
 }



render() {
  return(
      <div className="body">
        <div className="paragraph">
          <img src={aboutText} className="aboutText" alt="text"></img>
            <div style={{position: "relative", float: 'right', bottom: "50px"}}>
              <a className="CV" href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3Acd912b8a-b3c8-4c94-a2d6-11718466534f">View my CV</a>
              <a className="Link" href="https://www.linkedin.com/in/kahti-demba-79501a138/">LinkedIn</a>
            </div>
        </div>
      </div>
    );
  }

}





export default About;
