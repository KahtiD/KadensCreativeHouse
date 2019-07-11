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
            <p id="p" className="aboutText">
              <span style={{color: "#00EBFF"}}>Hi, I'm Kahti a digital creative. &nbsp;</span>
              <span style={{color: "#00FFC4"}}>I specialise in: &nbsp;</span>
              <span style={{color: "#00FF80"}}>Web development, CX, UX UI Design & Graphic Design. &nbsp;</span>
              <span style={{color: "#76FF00"}}>My skills are: Problem solving, Empathy, Creativity, Tenacity, Reliablity & Customer Orientation. &nbsp;</span>
              <span style={{color: "#FFCE00"}}>I am proficient in: &nbsp;</span>
              <span style={{color: "#FF9D00"}}>Adobe Illustrator Photoshop XD HTML5 CSS3 Javascript React.js Node.js</span>
            </p>
            <a className="CV" href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3Acd912b8a-b3c8-4c94-a2d6-11718466534f">View my CV</a>
            <a className="Link" href="https://www.linkedin.com/in/kahti-demba-79501a138/">LinkedIn</a>
        </div>
      </div>
    );
  }

}





export default About;
