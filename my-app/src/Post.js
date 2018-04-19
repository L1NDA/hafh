import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import classNames from "classnames";
import "./css/timeline.css";
import Header from './Header.js';
import Timeline from './Timeline.js';
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
      goodRating: this.props.goodRating,
      badRating: this.props.badRating,
      clicked: false,
      sent: false,
    }
  }

  componentWillMount = () => {
    let good = this.props.good;
    let bad = this.props.bad;
    console.log("called");

    this.setState({
      goodRating: good,
      badRating: bad,
      clicked: false
    })
  }

  componentWillReceiveProps = (nextProps) => {
    let good = nextProps.good;
    let bad = nextProps.bad;

    this.setState({
      goodRating: good,
      badRating: bad
    })
  }

  _handleEmail = () => {
    this.setState( (prevState) => ({
      clicked: !prevState.clicked
    }))
  }

  _handleSending = () => {
    this.setState({
      sent: true,
    })
    setTimeout(() => {this.setState({
      sent: false,
      clicked: false,
    })}, 2000)
  }

  _handleclickTop = () => {
    let good = parseInt(this.state.goodRating) + 1;

    this.setState({
      goodRating: good,
    })
    this.props.saveStuff;
  }

  _handleclickBottom = () => {
    let bad = parseInt(this.state.badRating) + 1;

    this.setState({
      badRating: bad,
    })
    this.props.saveStuff;
  }



  render () {

    var postClass = classNames('post', this.props.type);

    return (
      <div className="generic-container">
        {this.state.clicked ?
          <div className="generic-container">

              {this.state.sent ?
                <div className="send-email">
                  <div className="send-email-container sent">
                    <div className="sent-message">
                      Your message has been sent.<br></br>
                    <a href="https://l1nda.github.io/hafh/#/messages" className="href send-email-link">Click here</a> to go to messages.
                    </div>
                  </div>
                </div> :
                <div className="send-email">
                  <div className="send-email-container">
                    <div className="vertical-flex send-message-header">
                      <img src={require(`${this.props.img}`)} className="send-message-pic"/>
                      <div className="send-message-title">Message {this.props.name}</div>
                    </div>
                    <textarea type="text" className="send-message-text"/>
                    <div className="send-message-button" onClick={this._handleSending}>SEND</div>
                  </div>
                </div>
              }

            <div className="modal" onClick={this._handleEmail}></div>
          </div> :
          null
        }

        <div className={postClass}>
          <div className="housing-label">{this.props.type}</div>
          <div className="post-og">
            <div className="post-text-container">
              <div className="vertical-flex post-propic">
                <img src={require(`${this.props.img}`)} className="post-pic"/>
              </div>

              <div className="post-text">
                <div className="horizontal-flex">
                  <div className="post-name">{this.props.name}</div>
                    <FontAwesome
                      onClick={this._handleEmail}
                      name='envelope'
                      className="envelope"
                      size='lg'
                      style={{ textShadow: '0 1px 0 rgba(100, 100, 100, 0.1)' }}
                    />
                </div>
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
      </div>
    )
  }
}

export default Post;

// <div className="horizontal-flex">
//   <div className="post-name">{this.props.name}</div>
//     <FontAwesome
//       onClick={this._handleEmail}
//       name='envelope'
//       className="envelope"
//       size='1x'
//       style={{ textShadow: '0 1px 0 rgba(100, 100, 100, 0.1)' }}
//     />
// </div>
