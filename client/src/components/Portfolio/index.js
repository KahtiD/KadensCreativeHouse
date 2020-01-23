import React, { Component } from 'react';
import './portfolio.scss';
import Showcase from './Showcase';

import logo1 from '../../images/new/Brown Paper Bag MockUp.jpg';
import logoMU1 from '../../images/new/Brown Paper Bag MockUp.jpg';

import logo2 from '../../images/new/colorplug.png';
import logoMU2 from '../../images/new/colorplug.png';

import logo3 from '../../images/new/Indstry.jpg';
import logoMU3 from '../../images/new/Indstry.jpg';

import placeholder from '../../images/default.svg';
import dark_placeholder from '../../images/dark_default.svg';



export class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }

  click = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  }


render() {
  return(
  <div className={this.props.modeChange ? "dark_body" : "body"}>
    <div className="sizing">
      {
        this.state.clicked &&
        <Showcase style={{position: 'absolute', display: 'inline-block'}}/>
      }
      <div className={this.state.clicked1 || this.state.clicked2 || this.state.clicked3 ? "faded" : "gallery"}>

          <div id="one" className="one" style={{backgroundImage: `url(${this.props.modeChange ? dark_placeholder : placeholder})`}} onClick={this.click.bind(this)} ></div>
          <div id="two" className="two" style={{backgroundImage: `url(${this.props.modeChange ? dark_placeholder : placeholder})`}} onClick={this.click.bind(this)}></div>
          <div id="three" className="three" style={{backgroundImage: `url(${this.props.modeChange ? dark_placeholder : placeholder})`}} onClick={this.click.bind(this)}></div>


          <div id="four" className="four" style={{backgroundImage: `url(${this.props.modeChange ? dark_placeholder : placeholder})`}} onClick={this.click.bind(this)}></div>
          <div id="five" className="five" style={{backgroundImage: `url(${this.props.modeChange ? dark_placeholder : placeholder})`}} onClick={this.click.bind(this)}></div>
          <div id="six" className="six" style={{backgroundImage: `url(${this.props.modeChange ? dark_placeholder : placeholder})`}} onClick={this.click.bind(this)}></div>

          <h1 className="title">Previous Work</h1>

      </div>



    {/*{ this.state.clicked1 &&
      <div className="galleryWrapper">
        <div className="galleryView">
          <div style={{position: "relative", width: "210px", height: "50px", margin: "0 auto", marginBottom: "20px"}}>
            <button className="next" onClick={this.next1.bind(this)}>Next</button>
            <button className="next" onClick={this.previous1.bind(this)}>Previous</button>
          </div>
          <img src={this.state.change1 ? logo1 : logoMU1} width="100%" height="100%" onClick={this.unclick1.bind(this)} alt="img1"></img>
        </div>
      </div>
    }

    { this.state.clicked2 &&
        <div className="galleryWrapper">
          <div className="galleryView">
            <div style={{position: "relative", width: "210px", height: "50px", margin: "0 auto", marginBottom: "20px"}}>
              <button className="next" onClick={this.next2.bind(this)}>Next</button>
              <button className="next" onClick={this.previous2.bind(this)}>Previous</button>
            </div>
            <img src={this.state.change2 ? logo2 : logoMU2} style={{objectFit: "cover"}} width="100%" height="100%" onClick={this.unclick2.bind(this)} alt="img2"></img>
          </div>
        </div>
    }

    { this.state.clicked3 &&
        <div className="galleryWrapper">
          <div className="galleryView">
            <div style={{position: "relative", width: "210px", height: "50px", margin: "0 auto", marginBottom: "20px"}}>
              <button className="next" onClick={this.next3.bind(this)}>Next</button>
              <button className="next" onClick={this.previous3.bind(this)}>Previous</button>
            </div>
            <img src={this.state.change3 ? logo3 :logoMU3} width="100%" height="100%" onClick={this.unclick3.bind(this)} alt="img3"></img>
          </div>
        </div>
    }*/}

    </div>
  </div>
    );
  }
}




export default Portfolio;
