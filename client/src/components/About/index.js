import React, { Component } from 'react';
import './about.scss';
import pdf from '../../images/Kahti Demba CV.pdf';





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
            <div id="p" className="aboutText">
              <h1>Hi, I'm Kahti N Demba</h1>
              <p>a UX designer and Interactive developer based in London, currently working at IBM iX.</p>
              <p>I aim to solve complex user centric problems, and aide in digital transformation strategies by leveraging a multidisciplinary digital skill set and academic marketing background.</p>
              <p>I invite you to view a select few of my personal projects produced outside of my full time role, to be found below. </p>
              <p>Thank you for taking the time to visit, please do not hesitate to contact me at: <a className="email" href="/">kahti.demba@hotmail.co.uk</a> </p>
              <p>More insight regarding my skill set can be found through the viewing of:</p>
            </div>
            <a className="CV" target="_blank" rel='noreferrer noopener' href={pdf}>My CV</a>
            <a className="Link" target="_blank" rel='noreferrer noopener' href="https://www.linkedin.com/in/kahti-demba-79501a138/">My LinkedIn</a>
        </div>
      </div>
    );
  }

}





export default About;
