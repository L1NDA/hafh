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
import "./img/stock.jpeg";
import "./img/stock2.jpg";
import FontAwesome from "react-fontawesome";

class Post extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {

    var postClass = classNames('post', this.props.type);

    return (
      <div className={postClass}>
        <div className="housing-label">{this.props.type}</div>
        <div className="post-og">
          <img src={require(`${this.props.img}`)} className="post-pic"/>
          <div className="post-text">
            <div className="post-name">{this.props.name}</div>
            <div className="post-content">{this.props.post}</div>
          </div>
        </div>
        <div className="post-line"></div>
        <div className="post-response">
          <img className="post-response-pic" src={require(`./img/stock2.jpg`)}/>
          <input type="text" placeholder="Reply..." className="search post-reply"/>
          <div className="postButton post-button">SEND</div>
        </div>
      </div>
    )
  }
}

export default Post;
