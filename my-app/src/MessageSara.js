import React, { Component } from 'react';
import classNames from "classnames";
import "./css/messages.css";
import Header from './Header.js';
import { HashRouter } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import sara from "./img/stock.jpeg";
import manny from "./img/stock2.jpg";
import FontAwesome from "react-fontawesome";
import message from "./img/message.png"

class MessageSara extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }


  render () {

    var postClass = classNames('message');
    var type = classNames('message-label');
    type += ` ${this.props.type}`

    return (
      <HashRouter>
        <switch>
          <div className="messages-sara">
            <Header button1="profile" button2="log out" loggedIn={true} link="https://l1nda.github.io/hafh/#/"/>

            <div className="messages-content flex-between">
              <a className="profile-back" href="https://l1nda.github.io/hafh/#/messages">
                <FontAwesome
                  name='arrow-left'
                  size='lg'
                  style={{ textShadow: '0 1px 0 rgba(100, 100, 100, 0.1)' }}
                />
              Back to your messages
              </a>
              <div className="horizontal-flex">
                <div className="messages-title">Sara Zandvakilli</div>
                <a href="https://l1nda.github.io/hafh/#/sara" className="href">
                  <div className="vertical-flex post-propic profile-pic message-propic-container">
                    <img src={sara} className="post-pic message-propic"/>
                  </div>
                </a>

              </div>

              <img src={message} className="message-sara"></img>
            </div>
          </div>
        </switch>
      </HashRouter>
    )
  }
}

export default MessageSara;
