import React, { Component } from 'react';
import classNames from "classnames";
import "./css/categories.css";
import Header from './Header.js';
import { HashRouter } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import FontAwesome from "react-fontawesome";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Info2 from './Info2.js';

class Categories extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {

    return (
      <HashRouter>
        <switch>
          <div className="categories">
            <Header button1="PROFILE" button2="LOG OUT" link="https://l1nda.github.io/hafh/#/"/>
            <div className="categories-box">
              <Info2 category="housing"/>
            </div>
          </div>
        </switch>
      </HashRouter>
    )
  }
}

export default Categories;
