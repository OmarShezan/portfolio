import React from 'react';
import './contact.css'
import Title from '../component/Title';
import Fade from 'react-reveal/Fade'
// const formValid = ({ formErrors, ...rest }) => {
//   let valid = true;
//   // delete rest["def"];
//   // validate form errors being empty
//   Object.values(formErrors).forEach(val => {
//     val.length > 0 && (valid = false);
//   });


//   // validate the form was filled out
//   Object.values(rest).forEach(val => {
//     console.log(rest)
//     console.log(typeof(rest))
//     val === "" && (valid = false);
//   });
 
//   return valid;
// };

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: "", email:"", subject:"", message:"",
      formErrors:{
        name:'',
        email:'',
        subject:'',
        message:''
      }};
    }
    validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    validateName(name){
      var re = /^[a-zA-Z\s]*$/;
      return re.test(name)
    }
    handleChange = (e)=> {
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "name":
        formErrors.name =
          !this.validateName(value) || value.length<3 ? "Name should consist of letter only and over 3 character" : "";
        break;
      case "email":
        if(!this.validateEmail(value))
        {
          formErrors.email = "Invalid email format"
        }
        else{
          formErrors.email= "";
        }
        break;
      case "subject":
        formErrors.subject = value.length < 5? "Subject should more than 5 characters": ""
        break;
      case "message":
        formErrors.message = value.length < 10 ? "Tell me more please" : ""
        break;
      default:
        
    }

    this.setState({ formErrors, [name]: value });

    }
  
    render() {
      const {formErrors} = this.state;
      return (
        <div  id="contact">
        <Title name="Contact"/>
        <form className="form-style-9" action="https://formspree.io/shezan60@gmail.com" method="POST">
          <Fade top>
          <span>I would love to hear from you, whether its casual chat, project idea or anything else. Dont hesitate to contact<span role="img" aria-label="smiling face">😊</span></span>
          <ul>
          <li>
              <span className="labelName">Name</span>
              <input required type="text" name="name" value={this.state.name} onChange={this.handleChange} className="field-style field-full align-none"/>
              {/* <input type="email" name="email" value={this.state.email}onChange={this.handleChange} className="field-style field-split align-right" placeholder="Email" /> */}
          </li>
          <li>
              <span className="labelName">Email</span>
              {/* <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="field-style field-split align-left" placeholder="Name" /> */}
              <input required type="email" name="email" value={this.state.email}onChange={this.handleChange} className="field-style field-full align-none" />
          </li>
          <li>
          <span className="labelName">Subject</span>
          <input required type="text" name="subject" value={this.state.subject} onChange={this.handleChange} className="field-style field-full align-none"/>
          </li>
          <li>
          <span className="labelName">Message</span>
          <textarea required name="message" value={this.state.message} onChange={this.handleChange} className="field-style" ></textarea>
          
          {
            formErrors.name.length > 0 && (
              <span className="errorMessage">{formErrors.name}</span>
              )
          }
          {
            formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
          )
          }
          {
            formErrors.subject.length > 0 && (
              <span className="errorMessage">{formErrors.subject}</span>
          )
          }
          {
            formErrors.message.length > 0 && (
              <span className="errorMessage">{formErrors.message}</span>
          )
          }
          </li>
          
          <li>
          <input type="submit" value="Send Message" />
          </li>
          {/* <li>
          <input type="text" name="def" value={this.state.def} onChange={this.handleChange} className="field-style field-full align-none def"/>
          </li> */}
          </ul>
          <p>Email: shezan60@gmail.com</p>
          </Fade>
        </form>
        
        
        </div>
      );
    }
  }
export default Contact;