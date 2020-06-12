import React from 'react';
import Message from './Message';
import Scroll, { Element, scroller } from 'react-scroll';

import axios from 'axios'


class Contact extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      alert_message: ''
      
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3001/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        //alert("Message Sent."); 
        this.state.alert_message = "success"
        this.resetForm()
        this.removeMessage()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.");
      }
    })
  }

  resetForm(){
    
     this.setState({name: '', email: '', phone: '', message: ''})
    
  }


  removeMessage(){
    setTimeout(() => {
      this.setState({
          alert_message: ' '
      });
  }, 3000)
  }


 
  


  

  


    render(){

        return (

          <Element name="contact-element">
    


            <section className="page-section" id="contact">
          
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                {this.state.alert_message ==="success" ? <Message/> : null}
                
                  <h2 className="section-heading">Contact Us</h2>
                  <h3 className="section-subheading text-muted">We are always here for you</h3>
                </div>
          
              </div>
              <div className="row">
                <div className="col-lg-12">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="row">
                <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" placeholder="Your Name *" value={this.state.name}  required="required"  data-validation-required-message="Please enter your name." onChange={this.onNameChange.bind(this)} />
                    <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" placeholder="Your Email Address *"   data-validation-required-message="Please enter a message."  aria-describedby="emailHelp"  data-validation-required-message="Please enter your email address." value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                          <label htmlFor="phone">Phone</label>
                          <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." value={this.state.phone} onChange={this.onPhoneChange.bind(this)}/>
                          <p className="help-block text-danger"></p>
                  </div>
                  </div>

                <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea placeholder="Your Message *" className="form-control"  rows="5" cols="50" required="required"  data-validation-required-message="Please enter a message."  value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    <p className="help-block text-danger"></p>
                </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                        <div id="success"></div>
                        <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                      </div>
                  </div>
                </form>
                </div>
              </div>
            </div>
            
          </section>

          </Element>
       


        );
    }

    onNameChange(event) {
      this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
      this.setState({email: event.target.value})
      }

      onPhoneChange(event) {
        this.setState({phone: event.target.value})
        }
    
      onMessageChange(event) {
      this.setState({message: event.target.value})
      }
    
    





}

export default Contact;