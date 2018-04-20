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

class Info2 extends Component {
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
              <div className="info-title">What to Expect When Looking for Education</div>
              <form className="body">
                  Several factors are typically considered when people search for Education including <b>cost</b> and <b>accessibility</b>.<br/>
                  <br/>
                  The average cost of tuition at a <input type="text" className="type" placeholder="public"></input>  University in Boston is <b>$___</b>.
                  You may find that the most affordable option is to take classes online.<br/>
                  <br/>
                  Less than 20% of Immigrants have a college degree.

              </form>
          </div>
        </div>
        </switch>
      </HashRouter>
    )
  }
}

export default Info2;
