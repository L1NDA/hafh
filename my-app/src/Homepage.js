import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import classNames from "classnames";
import "./css/homepage.css";
// import './css/video.scss';
import Header from './Header.js';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import YouTube from 'react-youtube';

class Homepage extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.mute();
  }

  _onEnd(event) {
    event.target.playVideo();
  }

  render () {

    const opts = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        sound: 0
      }
    };

    return (
      <Router>
        <switch>
          <div className="homepage">
            <Header button1="log in" button2="sign up"/>
            <div className="title">HOME AWAY<br></br> FROM HOME</div>
            <div className="video-background">
              <div className="video-foreground">
                <YouTube
                  videoId="43LTRaSVe50"
                  opts={opts}
                  className="video-iframe"
                  onReady={this._onReady}
                  onEnd={this._onEnd}
                  />
              </div>
            </div>
          </div>
        </switch>
      </Router>
    )
  }
}

export default Homepage;
