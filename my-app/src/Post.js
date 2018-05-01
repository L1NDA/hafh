import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
      upvoted: false,
      downvoted: false,
      expandPost: false,
    }
  }

  componentWillMount = () => {
    let good = this.props.good;
    let bad = this.props.bad;
    let favorite = this.props.favorited;

    this.setState({
      favorited: favorite,
      goodRating: good,
      badRating: bad,
      clicked: false,
    })
  }

  componentWillReceiveProps = (nextProps) => {
    let good = nextProps.good;
    let bad = nextProps.bad;
    let favorite = nextProps.favorited;

    this.setState({
      favorited: favorite,
      goodRating: good,
      badRating: bad
    })
    console.log("done");
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
      if(!this.state.upvoted && !this.state.downvoted){

      let good = parseInt(this.state.goodRating) + 1;

      this.setState({
        goodRating: good,
        upvoted: true,
      })
      this.props.saveStuff;
    }
  }

  _handleclickBottom = () => {
      if(!this.state.upvoted && !this.state.downvoted){
      let bad = parseInt(this.state.badRating) + 1;

      this.setState({
        badRating: bad,
        downvoted: true,
      })

      this.props.saveStuff;
    }
  }

  _handleFavorites = () => {
    this.setState({
      favorited: !this.state.favorited
    })
  }

  _handleclickSort = () => {
    this.props.sort // this doesn't work b/c idk how to change the parent state from a child
}

  _expandPost = () => {
    const clicker = ReactDOM.findDOMNode(this);
    clicker.scrollIntoView();
    this.setState({
      expandPost: !this.state.expandPost,
    })
    // window.scrollTo(0, clicker.offsetTop);
    // scrollIntoView()
    // const clicker = ReactDOM.findDOMNode(this);
    // if (some_logic){
    //   window.scrollTo(0, tesNode.offsetTop);
    // }
  }


  render () {

    var postClass = classNames('post', this.props.type);
    var starClass = classNames('star');
    { this.state.favorited ?
      starClass += " favorite" :
      null
    }

    var upVote = classNames('triangle-top');
    var downVote = classNames('triangle-bottom');

    if (this.state.upvoted) {
      upVote += " triangle-top-clicked"
    }

    if (this.state.downvoted) {
      downVote += " triangle-bottom-clicked"
    }


    console.log("favorited", this.props.favorited);
    console.log("favorited state", this.state.favorited);

    return (
      <div className="generic-container" onClick={this._expandPost}>
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
          <div className="housing-label" onClick={this.props.onClick}>{this.props.type}</div>
            <FontAwesome
              name='bookmark'
              className={starClass}
              size='lg'
              onClick={this._handleFavorites}
              style={{ textShadow: '0 1px 0 rgba(100, 100, 100, 0.1)' }}
            />
          <div className="post-og">
            <div className="post-text-container">
              <div className="vertical-flex post-propic">
                <a href={this.props.url} className="href">
                  <img src={require(`${this.props.img}`)} className="post-pic"/>
                </a>
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
                <FontAwesome
                  onClick={this._handleclickTop}
                  name='thumbs-up'
                  className={upVote}
                  size='lg'
                  style={{ textShadow: '0 1px 0 rgba(100, 100, 100, 0.1)' }}
                />
                <FontAwesome
                  onClick={this._handleclickBottom}
                  name='thumbs-down'
                  className={downVote}
                  size='lg'
                  style={{ textShadow: '0 1px 0 rgba(100, 100, 100, 0.1)' }}
                />
              <div className="rating" type="bad">{this.state.badRating}</div>
            </div>
          </div>
          <div className="post-line"></div>
          {
            this.state.expandPost ?
            <div className="expand-post">
              <div className="expand-post-person">
                <a href="https://l1nda.github.io/hafh/#/sara" className="href">
                  <img className="expand-post-pic" src={require(`./img/stock3.jpg`)}/>
                </a>
                Let me ask my friend!
              </div>
              <div className="expand-post-person">
                <a href="https://l1nda.github.io/hafh/#/sara" className="href">
                  <img className="expand-post-pic" src={require(`./img/stock6.jpg`)}/>
                </a>
                Where is this?
              </div>
            </div> :
            null
          }
          <div className="post-response">
            <a href="https://l1nda.github.io/hafh/#/profile" className="href">
              <img className="post-response-pic" src={require(`./img/stock2.jpg`)}/>
            </a>
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
