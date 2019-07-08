import React, { Component } from 'react';
import './contact.css';
// import aboutText from '../../images/aboutText.svg';
//import {} from '../../components';
// import {Link} from 'react-router-dom';


export class Contact extends Component {
  constructor(props) {
   super(props);

   this.state = {
     name: '',
     email: '',
     subject: '',
     message: '',
     formSubmit: false,
    };
 }

handleHidemessage = () => {
  this.setState({
    formSubmit: false
  });
}

handleChange = e => {
     this.setState({
       [e.target.name]: e.target.value
     });
   }

   sendFormOff() {
   const formData = new FormData();
   formData.append('name', this.state.name);
   formData.append('email', this.state.email);
   formData.append('subject', this.state.subject);
   formData.append('message', this.state.message);

    fetch('/contactUs', {
      method: 'POST',
      body: formData,
    }).then( res => {
      console.log( "show", res );
    })
    .catch( err => {
      console.log('Error', err)
    })
  }

handleSubmit(e) {
 e.preventDefault();
 //clear form on submission
  this.setState({
    formSubmit: true,
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  //send form off
  this.sendFormOff();
}


render() {
  return(
  <div className="body1">
    <div className="contact-wrapper">
      <h1 className="title1">Contact Me</h1>
      <div className="formArea">
      {this.state.formSubmit ?
        <div className="submitCover">
          <h1>Thank You</h1>
          <h2>Your message has been recieved.</h2>
          <h3>I will be in contact soon!</h3>
          <button onClick={this.handleHidemessage.bind(this)}>Close</button>
        </div>

        :

        <form  className="formWrapper" onSubmit={e => this.handleSubmit.call(this, e)}>
             <textarea className="name" name="name" placeholder="Name" value={this.state.name} onChange={e => this.handleChange.call(this, e)} required></textarea>
             <textarea className="email" name="email" placeholder="Email"  value={this.state.email} onChange={e => this.handleChange.call(this, e)} required></textarea>
             <textarea className="subject" name="subject" placeholder="Subject" value={this.state.subject} onChange={e => this.handleChange.call(this, e)} required></textarea>
             <textarea className="message" name="message" placeholder="Message" value={this.state.message} onChange={e => this.handleChange.call(this, e)} required></textarea>
             <input type="submit" className="contactSubmit" value="Send" ></input>
          </form>
      }

        </div>
    </div>
  </div>

    );
  }
}




export default Contact;
