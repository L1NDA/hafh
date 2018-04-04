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
import "./css/react-grid-layout-styles.css";
import "./css/react-resizable-styles.css";
import ScrollManager from 'window-scroll-manager'

class Header extends Component {

  render() {

    return (
      <div className="header">
        <img src="./img/icon.png"/>
        <HeaderButton text="log in"/>
        <HeaderButton text="sign up"/>
      </div>
    );
  }
}

export default Header;
