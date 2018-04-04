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
      </div>
    )
  }
}

export default Post;
