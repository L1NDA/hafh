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
import profpic from "./img/stock.jpeg"


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class ProfileSara extends Component {
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
            <img src={profpic} className="profpic"/>
            <div className="signup-form" noValidate>
           
              <div className="form-inner">
              <div className="signup-title">Sara Zandvakilli</div>

                <div className="row">
                Bio:
                  <div className="signup-formControl">
                      I love to meet new people and hope I can meet you someday!
                      I miss my home country very much, and reconnecting with other immigrants from Israel helps me keep in touch with my past.
                  </div>
                </div>

                <div className="row">
                Years in the US:
                    <div className="signup-formControl">
                   3
                    </div>
                </div>


                <div className="row">
                Country of Origin:
                    <div className="signup-formControl">
                        Israel
                    </div>
                </div>


                <div className="row">
                State of residence:
                    <div className="signup-formControl">
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
export default ProfileSara;
