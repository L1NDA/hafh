import React, { Component } from 'react';
import classNames from "classnames";
import "./css/profile.css";
import Header from './Header.js';
import { HashRouter } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import FontAwesome from "react-fontawesome";
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import profPic from "./img/stock2.jpg";

class Profile extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {

    return (
      <HashRouter>
      <switch>
      <div className="backdrop">
        <Header button1="PROFILE" button2="LOG OUT" link="https://l1nda.github.io/hafh/#/"/>
      </div>
      <img src={profPic} className="profPic"/>
      <div className="name"> Manny Xiao </div>
      <div className="country"> COUNTRY </div>
      <div className="bio"> BIOBIO </div>
      <div className="endorsement"> 
        endorsed for :
        <img src={profPic} className ="foodLogo"/> food by <div className = "endorseNumber "> 34 </div> people 
        <img src={profPic} className ="houseLogo"/> housing by <div className = "endorseNumber "> 12 </div> people 
      </div>
      <div className="posts">

      </div>
      </switch>
      </HashRouter>
    )
  }
}

export default Profile;
