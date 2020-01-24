import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import './portfolio.scss';
import Showcase from './Showcases/Showcase';
import Showcase2 from './Showcases/Showcase2';
import Showcase3 from './Showcases/Showcase3';
import Showcase4 from './Showcases/Showcase4';
import Showcase5 from './Showcases/Showcase5';
import Showcase6 from './Showcases/Showcase6';


const thumbnail = 'https://drive.google.com/uc?id=1WrvRzGerL7pE-HQmgPr-ELhQp47p9ILG';
const thumbnail2 = 'https://drive.google.com/uc?id=1hDs6_LC2f1jEOtiVNLJg8QC6VK3UAk-8';
const thumbnail3 = 'https://drive.google.com/uc?id=1Nz-mQdt-fj4D54y_mHInv96Z3u0o-31Q';
const thumbnail4 = 'https://drive.google.com/uc?id=123uxX2DZtdAI2mpfYP9eee_vJZrc8oMZ';
const thumbnail5 = 'https://drive.google.com/uc?id=1vcW_HVz5fn3oMhvBtzVbkRrSSPAu2VId';
const thumbnail6 = 'https://drive.google.com/uc?id=1hLw0Ap1_eekf9vv32uz6vDj9PDvw1j2z';

export class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      clicked2: false,
      clicked3: false,
      clicked4: false,
      clicked5: false,
      clicked6: false,
    };
  }

  click = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  }
  click2 = () => {
    this.setState({
      clicked2: !this.state.clicked2,
    });
  }
  click3 = () => {
    this.setState({
      clicked3: !this.state.clicked3,
    });
  }
  click4 = () => {
    this.setState({
      clicked4: !this.state.clicked4,
    });
  }
  click5 = () => {
    this.setState({
      clicked5: !this.state.clicked5,
    });
  }
  click6 = () => {
    this.setState({
      clicked6: !this.state.clicked6,
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
      {
        this.state.clicked2 &&
        <Showcase2 style={{position: 'absolute', display: 'inline-block'}}/>
      }
      {
        this.state.clicked3 &&
        <Showcase3 style={{position: 'absolute', display: 'inline-block'}}/>
      }
      {
        this.state.clicked4 &&
        <Showcase4 style={{position: 'absolute', display: 'inline-block'}}/>
      }
      {
        this.state.clicked5 &&
        <Showcase5 style={{position: 'absolute', display: 'inline-block'}}/>
      }
      {
        this.state.clicked6 &&
        <Showcase6 style={{position: 'absolute', display: 'inline-block'}}/>
      }
      <div className="gallery">

          <div id="one" className="one">
            <LazyLoad height={"100%"}>
              <img  style={{objectFit: "cover"}} width="100%" height="100%" alt="" src={thumbnail} onClick={this.click.bind(this)} />
            </LazyLoad>
          </div>

          <div id="two" className="two">
            <LazyLoad height={"100%"}>
              <img style={{objectFit: "cover"}} width="100%" height="100%" alt="" src={thumbnail2} onClick={this.click2.bind(this)} />
            </LazyLoad>
          </div>

          <div id="three" className="three">
            <LazyLoad height={"100%"}>
              <img style={{objectFit: "cover"}} width="100%" height="100%" alt="" src={thumbnail3} onClick={this.click3.bind(this)} />
            </LazyLoad>
          </div>

          <div id="four" className="four">
            <LazyLoad height={"100%"}>
              <img style={{objectFit: "cover"}} width="100%" height="100%" alt="" src={thumbnail4} onClick={this.click4.bind(this)} />
            </LazyLoad>
          </div>

          <div id="five" className="five">
            <LazyLoad height={"100%"}>
              <img style={{objectFit: "cover"}} width="100%" height="100%" alt="" src={thumbnail5} onClick={this.click5.bind(this)} />
            </LazyLoad>
          </div>

          <div  id="six" className="six">
            <LazyLoad height={"100%"}>
              <img style={{objectFit: "cover"}} width="100%" height="100%" alt="" src={thumbnail6} onClick={this.click6.bind(this)} />
            </LazyLoad>
          </div>

          <h1 className="title">Previous Work</h1>

      </div>
    </div>
  </div>
    );
  }
}




export default Portfolio;
