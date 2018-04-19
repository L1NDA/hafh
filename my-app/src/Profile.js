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
           
            <div className="signup-form" noValidate>
           
              <div className="form-inner">
              <div className="signup-title">Manny Xiao</div>
                <div className="row">
                  <div className="signup-formControl"  name="firstName" placeholder="First Name">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus consectetur magna, 
                        non mollis metus elementum ac. Maecenas sit amet felis at metus ultrices dignissim eu tempor 
                        nibh. Curabitur sed posuere arcu, sed aliquam lorem. Etiam ut justo varius justo tempus mattis. Suspendisse vel commodo leo. Nulla metus magna, rutrum sed placerat sed, fringilla vitae dolor. Duis in consectetur lectus. In et enim vel urna laoreet sagittis a non erat. Vivamus vel hendrerit magna. Duis lacinia consectetur erat, eu bibendum neque posuere in. Aliquam pretium euismod risus, nec consectetur libero auctor ac.</div>
                </div>

                <div className="row">
                    hello
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
