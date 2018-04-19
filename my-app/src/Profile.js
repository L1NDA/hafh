import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import FontAwesome from "react-fontawesome";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import classNames from "classnames";
import Header from './Header.js';
import { HashRouter } from 'react-router-dom';
import "./css/profile.css";
import 'react-datepicker/dist/react-datepicker.css';
import profpic from "./img/stock2.jpg"


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class Profile extends Component {
  constructor (props) {
    super(props);
    this.state = {

    };

  }
  

  render () {


    return (
      <HashRouter>
        <switch>
        <Header button1="log in" button2="sign up" link="https://l1nda.github.io/hafh/#/signup"/>
          
          <div className="signup">
          <div className = "head"> <h1>Profile</h1>  </div>
            <img src={profpic} className="profpic"/>
            <div className="signup-form" noValidate>
           
              <div className="form-inner">
              <div className="signup-title">Manny Xiao</div>

                <div className="row">
                Bio:
                  <div className="signup-formControl"  name="firstName" placeholder="First Name">
                        Hi I'm Manny. 
                  </div>
                </div>

                <div className="row">
                Years in the US:
                    <div className="signup-formControl"  name="firstName" placeholder="First Name">
                   5
                    </div>
                </div>


                <div className="row">
                Country of Origin:
                    <div className="signup-formControl"  name="firstName" placeholder="First Name">
                        Israel
                    </div>
                </div>


                <div className="row">
                State of residence:
                    <div className="signup-formControl"  name="firstName" placeholder="First Name">
                        New York 
                    </div>
                </div>

              </div>
            </div>
          </div>
        </switch>
      </HashRouter>
    )
  }
}
export default Profile;
