import React, { Component }  from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import "./css/react-grid-layout-styles.css";
import "./css/react-resizable-styles.css";
import ScrollManager from 'window-scroll-manager'

class HeaderButton extends Component {

  render() {

    return (
      <div className="header-button">
        {this.props.text}
      </div>
    );
  }
}

export default HeaderButton;
