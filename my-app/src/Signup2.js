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

class Signup2 extends Component {
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
              <div className="signup-title">WELCOME TO HOME <br></br>AWAY FROM HOME!</div>
              <div className="signup-title2">A few more details will let us customize your experience...</div>
              <div className="form-inner">
                <input type="text" required className="signup-formControl" name="city" placeholder="What city are you living in?"/>
                <div className="row">
                  <input type="text" className="signup-formControl"  name="gender" placeholder="Gender"/>
                  <input type="text" className="signup-formControl" name="age" placeholder="Age"/>
                </div>

                <input type="email" required className="signup-formControl email" name="email" placeholder="Email"/>
                <div className="row">
                  <input type="password" className="signup-formControl" name="password" placeholder="Password"/>
                  <input type="password" className="signup-formControl" name="passwordRedo" placeholder="Retype Password" />
                </div>
                <input type="text" className="signup-formControl nationality"  name="nationality" placeholder="Nationality"/>
                <a href="/admin" className="signup-btn">
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
export default Signup2;
