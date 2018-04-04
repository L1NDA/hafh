import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import classNames from "classnames";
import "./css/timeline.css";
import Header from './Header.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import stock from "./img/stock.jpeg";
import stock2 from "./img/stock2.jpg";
import FontAwesome from "react-fontawesome";

class Post extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {

    return (
      <div className="post">
        <div className="housing-label">HOUSING</div>
        <div className="post-og">
          <img src={stock} className="post-pic"/>
          <div className="post-text">
            <div className="post-name">Sara Zandvakilli</div>
            <div className="post-content">Does anybody have recommendations as to which neighborhood I should choose/the safety of Boston neighborhoods?</div>
          </div>
        </div>
        <div className="post-line"></div>
        <div className="post-response">
          <img className="post-response-pic" src={stock2}/>
          <input type="text" placeholder="Reply..." className="search post-reply"/>
          <div className="postButton post-button">SEND</div>
        </div>
      </div>
    )
  }
}

export default Post;
