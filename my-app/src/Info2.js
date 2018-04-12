import React, { Component } from 'react';
import Iframe from 'react-iframe'
import classNames from "classnames";
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
          <div className="info-box">
              <div className="title">What to Expect When Looking for Food</div>
              <form className="body">
                  Several factors are typically considered when people search for foods, including <b>cost</b> and <b>store location</b>.<br/>
                  <br/>
                  The average cost to eat per  <input type="text" className="frequency" placeholder="month"></input> in Boston is <b>$___</b>.
                  You may find that the most affordable option is to cook your meals at home.<br/>
                  <br/>
                  Immigrants in the <b>Chinese</b> community frequently eat and purchase groceries in <b>Quincy, Malden, Acton, Newton, and Lexington</b>.
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
    )
  }
}

export default Info2;
