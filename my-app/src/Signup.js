import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import FontAwesome from "react-fontawesome";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import classNames from "classnames";
import Header from './Header.js';
import { HashRouter } from 'react-router-dom';
import "./css/signup.css";
import 'react-datepicker/dist/react-datepicker.css';


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

  render () {

    const { country, region } = this.state;

    return (
      <HashRouter>
        <switch>
        <Header button1="log in" button2="sign up"/>
          <div className="signup">
            <form className="signup-form" noValidate>
              <div className="form-inner">
              <div className="signup-title">REGISTER</div>
                <div className="row">
                  <input type="text" className="signup-formControl"  name="firstName" placeholder="First Name"/>
                  <input type="text" className="signup-formControl" name="lastName" placeholder="Last Name"/>
                </div>

                <input type="email" required className="signup-formControl email" name="email" placeholder="Email"/>
                <div className="row">
                  <input type="password" className="signup-formControl" name="password" placeholder="Password"/>
                  <input type="password" className="signup-formControl" name="passwordRedo" placeholder="Retype Password" />
                </div>
                <div className="row">
                  <CountryDropdown
                      classes="country"
                      value={country}
                      defaultOptionLabel="Where are you from?"
                      onChange={(val) => this.selectCountry(val)} />
                  <RegionDropdown
                    classes="region"
                    blankOptionLabel="Select Region"
                    country={country}
                    value={region}
                    onChange={(val) => this.selectRegion(val)} />
                </div>

                <DatePicker
                  className="signup-formControl datepicker"
                  placeholderText="When did you come to America?"
                  showYearDropdown
                  dateFormatCalendar="MMMM"
                  scrollableYearDropdown
                  maxDate={moment()}
                  yearDropdownItemNumber={20}
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                />
              <a href="https://l1nda.github.io/hafh/#/timeline" className="signup-btn">
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
      </HashRouter>
    )
  }
}
export default Signup;
