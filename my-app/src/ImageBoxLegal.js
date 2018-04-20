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
        this.state = {
          info: false
        }
    }

    _handleInfo = () => {
      this.setState({
        info: !this.state.info
      })
    }

    componentDidUpdate = () => {
      localStorage.setItem("selectValueHousing", JSON.stringify(this.state.selectValue))
    }

    handleClick = () => {
      this.props.handleCategoryFunctionChild(this.props.CategoryName);
    }

    // <a href={this.props.link} className="imagebox-container">

    render() {

    return (
      <div className="generic-container" onClick={this.handleClick}>
        {this.state.info ?
          <div className="generic-container">
            <div className="info-modal">
              <div className="info-title">What to Expect When Looking for Legal Advice</div>
                <div className="body">
                  In most civil cases, an attorney will be paid under one (or a combination) of the following fee arrangements: hourly rate, flat fee, retainer, or contingency fee.
                  <br/>
                  Hourly rates are the most common arrangement. In small towns, lawyers tend to charge in the range of $100-200. In major metropolitan areas, lawyers maychange in the range of $200-400.
                  Several factors are typically considered when people search for legal advice, including <b className="dynamic-text">cost</b> and <b className="dynamic-text">store location</b>.<br/>
                  <br/>
                  Immigrants in the <b className="dynamic-text">Chinese</b> community frequently seek legal services in <b className="dynamic-text">Quincy, Malden, Acton, Newton, and Lexington</b>.

            </div>
            </div>
            <div className="modal" onClick={this._handleInfo}></div>

        </div> :
          null

        }
        <a href={this.props.link} className="imagebox-container">
          <FontAwesome
            onClick={this._handleInfo}
            name='info-circle'
            className="info-circle"
            size='lg'
            style={{ textShadow: '0 1px 0 rgba(100, 100, 100, 0.1)' }}
          />
          <div id={this.props.CategoryName} className={this.props.class}>
            <div className="CategoryName">
                {this.props.CategoryName}
            </div>
          </div>
        </a>
      </div>
    )
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
