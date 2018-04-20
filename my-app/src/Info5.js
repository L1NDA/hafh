import React, { Component } from 'react';
import Iframe from 'react-iframe'
import classNames from "classnames";
import Header from './Header.js';
import "./css/info.css";
import { HashRouter } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import FontAwesome from "react-fontawesome";
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Info5 extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {

    return (
      <HashRouter>
      <switch>
      <div className="info-container">
      <Header button1="PROFILE" button2="LOG OUT" link="https://l1nda.github.io/hafh/#/"/>

          <div className="info-box">
              <div className="info-title">What to Expect When Looking for Jobs</div>
              <form className="body">
                  Employed residents working in Boston who have less than 1 year of job experience make an average annual salary of $54,942.
                  As job experience increases in time, average annual salary correspondingly increases.
                  For example, employed residents in Boston who have 1-4 years of job experience make an average annual salary of $58,285.
                  <br/>
                  Immigrants in the <b>Chinese</b> community frequently seek employment in <b>Quincy, Malden, Acton, Newton, and Lexington</b>.
                  <Iframe
                      url="https://www.google.com/maps/embed/v1/place?key=AIzaSyAH5uMfQyfWXcmc9WW41XNKdRMyTuzsuHk
    &q=Space+Needle,Seattle+WA"
                      width="450"
                      height="450"
                      frameborder="0" style="border:0"
                      display="initial"
                      position="relative"
                      allowfullscreen/>
              </form>
          </div>
        </div>
        </switch>
      </HashRouter>
    )
  }
}

export default Info5;
