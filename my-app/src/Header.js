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

  componentDidMount() {
    console.log("props", this.props);
  }

  render() {

    return (
      <div className="header">
        <a href="https://l1nda.github.io/hafh/#"><img src={logo} className="logo"/></a>
        <div className="buttons-container">
          {this.props.loggedIn ?
            <a href="https://l1nda.github.io/hafh/#/timeline" className="href categories-link">your feed</a>
            : null
          }
          {this.props.loggedIn ?
            <a href="https://l1nda.github.io/hafh/#/messages" className="href categories-link">messages</a>
            : null
          }
          <HeaderButton text={this.props.button1}/>
          <a href={this.props.link} className="href"><HeaderButton text={this.props.button2}/></a>
        </div>
      </div>
    );
  }
}

export default Header;
