import React, { Component }  from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import HeaderButton from './HeaderButton.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import logo from "./img/heart.png";
import "./css/react-grid-layout-styles.css";
import "./css/react-resizable-styles.css";
import ScrollManager from 'window-scroll-manager'

class Header extends Component {

  render() {

    return (
      <div className="header">
        <img src={logo} class="logo"/>
        <HeaderButton text="log in"/>
        <HeaderButton text="sign up"/>
      </div>
    );
  }
}

export default Header;
