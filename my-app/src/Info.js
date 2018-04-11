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

class Info extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {

    return (
          <div className="info-box">
              <div className="title">What to Expect When Looking for Housing</div>
              <div className="body">
                  Several factors are typically considered when people look for housing, including <b className="dynamic-text"> cost and location</b>.
                  <br/><br/>
                  <form>
                      The average cost to rent a <input type="text" placeholder="1" className="bedroom"></input>-bedroom
                      , <input type="text" placeholder="1" className="bathroom"></input>-bathroom listing in Boston is <b className="dynamic-text">$___</b> per month.
                      You may find that the most affordable option is to share your living space or rent out of a larger home.
                  </form><br/>
                  Immigrants in the <b className="dynamic-text">Chinese</b> community frequently choose to live in <b className="dynamic-text">Quincy, Malden, Acton, Newton, and Lexington</b>.
                  <br/><br/>
                  <Iframe
                      url="https://www.google.com/maps/d/embed?mid=1_XFwbb5WOTNpAU_zk_unEkuUM9nOLL8T"
                      width="450"
                      height="450"
                      frameborder="0" style="border:0"
                      display="initial"
                      position="relative"
                      allowfullscreen/>
              </div>
          </div>
    )
  }
}

export default Info;
