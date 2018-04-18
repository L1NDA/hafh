import React, { Component } from 'react';
import classNames from "classnames";
import "./css/messages.css";
import Header from './Header.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import "./img/stock.jpeg";
import "./img/stock2.jpg";
import FontAwesome from "react-fontawesome";

class Message extends Component {
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
      <div className={postClass}>
        <div className={type}>{this.props.type}</div>
        <div className="message-og">
          <div className="message-text-container">
            <img src={require(`${this.props.img}`)} className="message-pic"/>
            <div className="message-text">
              <div className="message-name">{this.props.name}</div>
              <div className="message-content">{this.props.post}</div>
            </div>
          </div>
          <a href={"https://l1nda.github.io/hafh/#/messages-" + this.props.key} className="message-btn">
              <FontAwesome
                name='angle-right'
                size='3x'
                style={{ textShadow: '0 1px 0 rgba(100, 100, 100, 0.1)' }}
              />
          </a>
        </div>
      </div>
    )
  }
}

export default Message;
