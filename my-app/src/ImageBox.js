import React, { Component }  from 'react';
import ReactDOM from 'react-dom'
import './css/categories.css';
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

    // <a href={this.props.link} className="imagebox-container">

    render() {

    return (
      <a href={this.props.link} className="imagebox-container">
        <div id={this.props.CategoryName} className={this.props.class}>
          <div className="CategoryName">
              {this.props.CategoryName}
          </div>
        </div>
      </a>
    );
  }
}

export default ImageBox;

// <a href={this.props.link} className="imagebox-container">
//   <div className="ImageBox">
//     <div className="CategoryName">
//         {this.props.CategoryName}
//     </div>
//     <div id={this.props.CategoryName} className={this.props.class}></div>
//   </div>
// </a>
