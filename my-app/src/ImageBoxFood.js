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
      localStorage.setItem("selectValueFood", JSON.stringify(this.state.selectValue))
    }

    test = () => {
      console.log("testes")
    }

    // <a href={this.props.link} className="imagebox-container">

    render() {

    return (
      <div className="generic-container" onClick={this.props.handleCategoryFunctionChild}>
        {this.state.info ?
          <div className="generic-container">
            <div className="info-modal">
              <div className="info-title">What to Expect When Looking for Food</div>
                <div className="body">
                  Several factors are typically considered when people search for foods, including <b className="dynamic-text">cost</b> and <b className="dynamic-text">store location</b>.<br/>
                  <br/>
                  The average cost to eat per  <input type="text" className="frequency" placeholder="month"></input> in Boston is <b className="dynamic-text">$___</b>.
                  You may find that the most affordable option is to cook your meals at home.<br/>
                  <br/>
                  Immigrants in the <b className="dynamic-text">Chinese</b> community frequently eat and purchase groceries in <b className="dynamic-text">Quincy, Malden, Acton, Newton, and Lexington</b>.
                  <br/><br/>
                  <Iframe
                      url="https://www.google.com/maps/embed/v1/place?key=AIzaSyAH5uMfQyfWXcmc9WW41XNKdRMyTuzsuHk&q=Space+Needle,Seattle+WA"
                      width="450"
                      height="450"
                      frameborder="0" style="border:0"
                      display="initial"
                      position="relative"
                      allowfullscreen/>
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
