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
      goodRating: 0,
      badRating: 0
    }
  }

  componentWillMount = () => {
    let good = this.props.good
    let bad = this.props.bad

    this.setState({
      goodRating: good,
      badRating: bad
    })
  }

  _handleclickTop = () => {
    let good = this.state.goodRating + 1;

    this.setState({
      goodRating: good,
    })
  }

  _handleclickBottom = () => {
    let bad = this.state.badRating + 1;

    this.setState({
      badRating: bad,
    })
  }

  render () {

    var postClass = classNames('post', this.props.type);

    return (
      <div className={postClass}>
        <div className="housing-label">{this.props.type}</div>
        <div className="post-og">
          <div className="post-text-container">
            <img src={require(`${this.props.img}`)} className="post-pic"/>
            <div className="post-text">
              <div className="post-name">{this.props.name}</div>
              <div className="post-content">{this.props.post}</div>
            </div>
          </div>
          <div className="ratings">
            <div className="rating" type="good">{this.state.goodRating}</div>
            <div className="triangle-top" onClick={this._handleclickTop}></div>
            <div className="triangle-bottom" onClick={this._handleclickBottom}></div>
            <div className="rating" type="bad">{this.state.badRating}</div>
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
