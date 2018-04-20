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

class Info4 extends Component {
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
              <div className="info-title">What to Expect When Looking for Legal Advice</div>
              <form className="body">
                  In most civil cases, an attorney will be paid under one (or a combination) of the following fee arrangements: hourly rate, flat fee, retainer, or contingency fee.
                  <br/>
                  Hourly rates are the most common arrangement. In small towns, lawyers tend to charge in the range of $100-200. In major metropolitan areas, lawyers maychange in the range of $200-400.
                  Several factors are typically considered when people search for legal advice, including <b>cost</b> and <b>store location</b>.<br/>
                  <br/>
                  Immigrants in the <b>Chinese</b> community frequently seek legal services in <b>Quincy, Malden, Acton, Newton, and Lexington</b>.
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

export default Info4;
