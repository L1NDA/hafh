import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './css/categories.css';
import Iframe from 'react-iframe'
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
import ScrollManager from 'window-scroll-manager';
import FontAwesome from "react-fontawesome";

class ImageBox extends Component {
    constructor (props) {
        super(props);
    }

    _handleInfo = () => {
      this.props.handleModal(this.props.CategoryName);
    }

    handleClick = () => {
      this.props.handleCategoryFunctionChild(this.props.CategoryName);
    }

    // <a href={this.props.link} className="imagebox-container">

    render() {

    return (
      <div className="generic-container">
        <a href={this.props.link} className="imagebox-container">
          <FontAwesome
            onClick={this._handleInfo}
            name='info-circle'
            className="info-circle"
            size='lg'
            style={{ textShadow: '0 1px 0 rgba(100, 100, 100, 0.1)' }}
          />
          <div id={this.props.CategoryName} className={this.props.class} onClick={this.handleClick}>
            <div className="CategoryName">
                {this.props.CategoryName}
            </div>
          </div>
        </a>
      </div>
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
