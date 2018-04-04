import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import classNames from "classnames";
import "./css/timeline.css";
import Header from './Header.js';
import Post from './Post.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import FontAwesome from "react-fontawesome";

class Timeline extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {
    console.log(React.version)

    return (
      <Router>
        <switch>
          <div className="timeline">
            <Header button1="PROFILE" button2="LOG OUT"/>
            <div className="timeline-content">
              <div class="search-bar">
                <div class="type"></div>
                
              </div>
              <Post/>
              <Post/>
              <Post/>
            </div>
          </div>
        </switch>
      </Router>
    )
  }
}

export default Timeline;
