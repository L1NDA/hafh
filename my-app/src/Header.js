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

class Header extends Component {

  render() {

    return (
      <div className="header">
        <a href="https://l1nda.github.io/hafh/#"><img src={logo} className="logo"/></a>
        <div className="buttons-container">
          <HeaderButton text={this.props.button1}/>
          <a href="https://l1nda.github.io/hafh/#/signup" className="href"><HeaderButton text={this.props.button2}/></a>
        </div>
      </div>
    );
  }
}

export default Header;
