import React, { Component } from 'react';
import './portfolio.css';
import aboutText from '../../images/aboutText.svg';

import logo1 from '../../images/cp.png';
import logoMU1 from '../../images/cpMockUp.png';

import logo2 from '../../images/fljNew.png';
import logoMU2 from '../../images/fljMockUp.png';

import logo3 from '../../images/bgnrNew.png';
import logoMU3 from '../../images/bgnrMockUp.png';

import placeholder from '../../images/default.png';



export class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      clicked1: false,
      change1: false,
      clicked2: false,
      change2: false,
      clicked3: false,
      change3: false,
      clicked4: false,
      change4: false,
      clicked5: false,
      change5: false,
      clicked6: false,
      change6: false,

    };
  }


  click1 = () => {
    this.setState({
      clicked1: true,
    });
  }

  unclick1 = () => {
    this.setState({
      clicked1: false,
    });
  }

  next1 = () => {
    this.setState({
      change1: true,
    })
  }

  previous1 = () => {
    this.setState({
      change1: false,
    })
  }

  click2 = () => {
    this.setState({
      clicked2: true,
    });
  }

  unclick2 = () => {
    this.setState({
      clicked2: false,
    });
  }

  next2 = () => {
    this.setState({
      change2: true,
    })
  }

  previous2 = () => {
    this.setState({
      change2: false,
    })
  }

  click3 = () => {
    this.setState({
      clicked3: true,
    });
  }

  unclick3 = () => {
    this.setState({
      clicked3: false,
    });
  }

  next3 = () => {
    this.setState({
      change3: true,
    })
  }

  previous3 = () => {
    this.setState({
      change3: false,
    })
  }

  click4 = () => {
    this.setState({
      clicked4: true,
    });
  }

  unclick4 = () => {
    this.setState({
      clicked4: false,
    });
  }

  next4 = () => {
    this.setState({
      change4: true,
    })
  }

  previous4 = () => {
    this.setState({
      change4: false,
    })
  }

  click5 = () => {
    this.setState({
      clicked5: true,
    });
  }

  unclick5 = () => {
    this.setState({
      clicked5: false,
    });
  }

  next5 = () => {
    this.setState({
      change5: true,
    })
  }

  previous5 = () => {
    this.setState({
      change5: false,
    })
  }

  click6 = () => {
    this.setState({
      clicked6: true,
    });
  }

  unclick6 = () => {
    this.setState({
      clicked6: false,
    });
  }

  next6 = () => {
    this.setState({
      change6: true,
    })
  }

  previous6 = () => {
    this.setState({
      change6: false,
    })
  }

render() {
  console.log("which one is it", this.state.clicked);
  return(
  <div className="body">
    <div className="sizing">
      <div className={this.state.clicked1 || this.state.clicked2 || this.state.clicked3 ? "faded" : "gallery"}>

          <div className="one" style={{backgroundImage: `url(${logo1})`}} onClick={this.click1.bind(this)} ></div>
          <div className="two" style={{backgroundImage: `url(${logo2})`}} onClick={this.click2.bind(this)}></div>
          <div className="three" style={{backgroundImage: `url(${logo3})`}} onClick={this.click3.bind(this)}></div>


          <div className="four" style={{backgroundImage: `url(${placeholder})`}} onClick={this.click4.bind(this)}></div>
          <div className="five" style={{backgroundImage: `url(${placeholder})`}} onClick={this.click5.bind(this)}></div>
          <div className="six" style={{backgroundImage: `url(${placeholder})`}} onClick={this.click6.bind(this)}></div>
          <h1 className="title">Previous Work</h1>

      </div>



    { this.state.clicked1 &&
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
    }

    </div>
  </div>
    );
  }
}




export default Portfolio;
