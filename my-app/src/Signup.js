import React, { Component } from 'react';
import FontAwesome from "react-fontawesome";
import Header from './Header.js';
import "./css/signup.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class Signup extends Component {
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

  render () {

    return (
      <Router>
        <switch>
        <Header button1="log in" button2="sign up"/>
          <div className="signup">
            <form className="signup-form" noValidate>
              <div className="signup-title">REGISTER</div>
              <div className="form-inner">
                <div className="row">
                  <input type="text" className="signup-formControl"  name="firstName" placeholder="First Name"/>
                  <input type="text" className="signup-formControl" name="lastName" placeholder="Last Name"/>
                </div>

                <input type="email" required className="signup-formControl email" name="email" placeholder="Email"/>
                <div className="row">
                  <input type="password" className="signup-formControl" name="password" placeholder="Password"/>
                  <input type="password" className="signup-formControl" name="passwordRedo" placeholder="Retype Password" />
                </div>
                <input type="text" className="signup-formControl nationality"  name="nationality" placeholder="Nationality"/>
                <a href="/signup2" className="signup-btn">
                  <FontAwesome
                    name='arrow-circle-right'
                    size='2x'
                    style={{ textShadow: '0 1px 0 rgba(100, 100, 100, 0.1)' }}
                  />
                </a>

              </div>
            </form>
          </div>
        </switch>
      </Router>
    )
  }
}
export default Signup;
