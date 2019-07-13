import React, { Component } from 'react';
import './about.scss';






export class About extends Component {
  constructor(props) {
   super(props);

   this.state = {

   }
 }



render() {
  return(
      <div className={ this.props.modeChange ? "dark_body" : "body"}>
        <div className="paragraph">
            <p id="p" className="aboutText">
              <span style={{color: "#00EBFF"}}>Hi, I'm Kahti a digital creative. &nbsp;</span>
              <span style={{color: "#00FFC4"}}>I specialise in </span>
              <span style={{color: "#00FF80"}}>web development, CX, graphic design, UI & UX design. &nbsp;</span>
              <span style={{color: "#76FF00"}}>I am creative, empathetic, tenacious and a highly reliable individual who is also skilled in problem solving.&nbsp;</span>
              <span style={{color: "#FFCE00"}}>My proficiencies lie in; &nbsp;</span>
              <span style={{color: "#FF9D00"}}>Adobe Illustrator, Photoshop, XD, HTML5, CSS3, Vanilla Javascript, React.js & Node.js</span>
            </p>
            <a className="CV" target="_blank" href="../../images/Kahti Demba CV.pdf">View my CV</a>
            <a className="Link" target="_blank" href="https://www.linkedin.com/in/kahti-demba-79501a138/">LinkedIn</a>
        </div>
      </div>
    );
  }

}





export default About;
