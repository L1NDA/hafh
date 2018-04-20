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
        <Header button1="profile" button2="log out" loggedIn={true} link="https://l1nda.github.io/hafh/#/"/>

          <div className="profile">
            <a className="profile-back" href="https://l1nda.github.io/hafh/#/timeline">
              <FontAwesome
                name='arrow-left'
                size='lg'
                style={{ textShadow: '0 1px 0 rgba(100, 100, 100, 0.1)' }}
              />
            Back to your feed
            </a>
            <div className="profile-info">
              <div className="vertical-flex post-propic profile-pic">
                <img src={profpic} className="post-pic"/>
              </div>

              <div className="form-inner">
              <div className="profile-name">Manny Xiao</div>

                <table className="profile-table">
                  <tbody>
                    <tr>
                      <td className="profile-topic">BIO</td>
                      <td className="profile-content">Hi, I'm Manny.</td>
                    </tr>
                    <tr>
                      <td className="profile-topic">COUNTRY OF ORIGIN</td>
                      <td className="profile-content">Israel</td>
                    </tr>
                    <tr>
                      <td className="profile-topic">YEARS IN THE US</td>
                      <td className="profile-content">5</td>
                    </tr>
                    <tr>
                      <td className="profile-topic">STATE OF RESIDENCE</td>
                      <td className="profile-content">New York</td>
                    </tr>

                  </tbody>

                </table>

              </div>
            </div>
          </div>
        </switch>
      </HashRouter>
    )
  }
}
export default Profile;
