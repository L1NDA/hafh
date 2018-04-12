import React, { Component } from 'react';
import classNames from "classnames";
import "./css/categories.css";
import Header from './Header.js';
import ImageBox from './ImageBox.js'
import { HashRouter } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import FontAwesome from "react-fontawesome";
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Categories extends Component {
  constructor (props) {
    super(props);
    this.state = {
      GridImage: ["./img/stock.jpeg"],
      CategoryName: ["Home"],
    }
  }

  createImage = () => {
    var Box = []
    for (var i = 0; i < this.state.counter; i++) {
      Box.push(<ImageBox GridImage={this.state.query[i]} CategoryName={this.state.CategoryName}/>)
    }
    return Box
  }

  render () {

    return (
      <HashRouter>
        <switch>
          <div className="categories">
            <Header button1="PROFILE" button2="LOG OUT" link="https://l1nda.github.io/hafh/#/"/>
            <div className="categories-box"> 
            </div>           
            {this.createImage()}
          </div>
        </switch>
      </HashRouter>
    )
  }
}

export default Categories;
