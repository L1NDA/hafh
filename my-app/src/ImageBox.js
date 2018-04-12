import React, { Component }  from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import ImgRoot from "./img/heart.png";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import "./css/react-grid-layout-styles.css";
import "./css/react-resizable-styles.css";
import "./css/categories.css";
import ScrollManager from 'window-scroll-manager'

class ImageBox extends Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render() {

    return (
      <div className="ImageBox">
        <div className="CategoryName">
            {this.props.CategoryName}
        </div>
        <a href={this.props.link}>
          <img src={require(`${this.props.GridImage}`)} className="category-pic" />
        </a>
      </div>
    );
  }
}

export default ImageBox;
