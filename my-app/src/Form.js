import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import classNames from "classnames";
import Globe from './Globe.js'
// import './Form.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Admin from "./Admin.js";
import Logo from "./Logo.js"

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false,
      emailOutline: false,
      passOutline: false
    }
  }

  // handleKeyPress = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   this.setState({[name]: value});
  //   if (e.key === "Enter") {
  //     () => { this.validateField(name, value) };
  //   }
  //
  // }

  handleKeyPress = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.validateField(name, value, e);
    // console.log(name);
    // console.log(value)
  }

  validateField(fieldName, value, e) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        // fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        this.setState({emailValid: emailValid})
        if (value.length > 1) {
          this.setState({emailOutline: !emailValid})
        }
        break;
      case 'password':
        passwordValid = value.match(/gillevi89/g);
        // fieldValidationErrors.password = passwordValid ? '': ' is invalid';
        this.setState({passwordValid: passwordValid})
        if (value.length > 1) {
          this.setState({passOutline: !passwordValid})
        }
        break;
      default:
        break;
    }
    // if (passwordValid) {
    //   document.location.href = "admin"
    // }
    this.setState({formErrors: fieldValidationErrors}, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    var emailClasses = classNames ({
      formColor: this.state.emailOutline,
      formControl: true
    })

    var passClasses = classNames({
      fadeIn: this.state.emailValid,
      // hidden: !this.state.emailValid,
      // fadeOut: !this.state.emailValid,
      formControl: true,
      formColor: this.state.passOutline
    });

    var submitClasses = classNames ({
      btn: true,
      // hidden: !this.state.passwordValid,
      // fadeOut: !this.state.passwordValid,
      disabled: !this.state.passwordValid
    })

    return (
      <Router>
        <switch>
          <Logo/>
          <div>
            <form className="form" noValidate>
              <input type="email" required className={emailClasses} name="email" placeholder="EMAIL" onKeyPress={this.handleKeyPress}  />
              <input type="password" className={passClasses} name="password" placeholder="PASSWORD" onKeyPress={this.handleKeyPress}  />
              <a href="/admin" className={submitClasses}>LOGIN</a>
            </form>
          </div>
          <div className="globe">
            <Globe />
          </div>
        </switch>
      </Router>
    )
  }
}

export default Form;

// <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
// <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
//   <input type="password" className="form-control" name="password" placeholder="Password" onKeyPress={this.handleKeyPress}  />
// </div>

  //{this.state.passwordValid &&
  //     <button type="submit" className="btn btn-primary" disabled={!this.state.passwordValid}>Sign up</button>
  // }

// <FormErrors formErrors={this.state.formErrors} />
  // <a href="google.com"><div type="submit" className="btn" disabled={!this.state.passwordValid}>Log In</div></a>

  // <Link to="/admin" className={submitClasses}>LOGIN</Link>
