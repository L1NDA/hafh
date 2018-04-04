import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import FontAwesome from "react-fontawesome";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { FormErrors } from './FormErrors';
import classNames from "classnames";
import Header from './Header.js';

import "./css/signup.css";
import 'react-datepicker/dist/react-datepicker.css';
import faStyles from 'font-awesome/css/font-awesome.css'


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
      passOutline: false,
      country: '', 
      region: '',
      immigrationdate: moment()
    };
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
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
    const { country, region } = this.state;

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
        <Header button1="log in" button2="sign up"/>
          <div>
            <form className="form" noValidate>
              <input type = "text" classname="textinput"  name= "firstname" placeholder="First Name"/>
              <input type = "text" classname="textinput" name = "last name" placeholder="Last Name"/>
              <input type="email" required className={emailClasses} name="email" placeholder="Email" onKeyPress={this.handleKeyPress}  />
              <input type="password" className={passClasses} name="password" placeholder="Password" onKeyPress={this.handleKeyPress}  />
              <input type="password" classname="textinput" name="lastName" placeholder="Retype password" />
              <CountryDropdown
                value={country}
                onChange={(val) => this.selectCountry(val)} />
              <RegionDropdown
                country={country}
                value={region}
                onChange={(val) => this.selectRegion(val)} />
                        <DatePicker
                          placeholderText="When did you come to America?"
                          showYearDropdown
                          dateFormatCalendar="MMMM"
                          scrollableYearDropdown
                          maxDate={moment()}
                          yearDropdownItemNumber={20}
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                        />
              <a href="/admin" className={submitClasses}>LOGIN</a>
            </form>
          </div>

          <FontAwesome
            name='arrow-alt-circle-right'
            size='2x'
            cssModule={faStyles}
            style={{ textShadow: '0 1px 0 rgba(100, 100, 100, 0.1)' }}
          />
        </switch>
      </Router>
    )
  }
}
/*
<div>
<Select
    placeholder = "Gender"
    className="gender-select"
    name="form-field-name"
    value={value}
    onChange={this.handleChange}
    options={[
        { value: 'one', label: 'Female' },
        { value: 'two', label: 'Male' },
        { value: 'three', label: 'Prefer not to say' },
    ]}
/>
<form>
    <input type='text' name ='age' placeholder="Age"/>
    <input type='text' name ='year' placeholder="What year did you move to the US?"/>
    <input type='text' name ='bio' placeholder="Tell us about yourself?"/>
</form>
</div>

<FontAwesome
name='arrow-alt-circle-right'
size='2x'
style={{ textShadow: '0 1px 0 rgba(100, 100, 100, 0.1)' }}
/> }*/
export default Signup;

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
