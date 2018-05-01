import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import classNames from "classnames";
import './css/categories.css';
import ImgRoot from "./img/heart.png";
import ImageBox from './ImageBox.js';
import ImageBoxFood from './ImageBoxFood.js';
import ImageBoxHousing from './ImageBoxHousing.js';
import ImageBoxLegal from './ImageBoxLegal.js';
import ImageBoxEducation from './ImageBoxEducation.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import "./css/react-grid-layout-styles.css";
import "./css/react-resizable-styles.css";
import "./css/categories.css";
import FontAwesome from "react-fontawesome";
import Iframe from 'react-iframe';

class CategoriesPopupFood extends Component {
    constructor (props) {
        super(props);
        this.state = {
          CategoryName: ["Food", "Housing", "Legal", "Education"],
        }
    }
    // <a href={this.props.link} className="imagebox-container">

    _handleInfo = () => {
      this.props.handleModal(this.props.CategoryName);
    }

    render() {

    return (
        <div className="generic-container">
          <div className="info-title">What to Expect When <br></br>Looking for Food</div>
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
              <FontAwesome
                name='arrow-left'
                className="profile-back"
                onClick={this._handleInfo}
                size='lg'
                style={{ textShadow: '0 1px 0 rgba(100, 100, 100, 0.1)' }}
              />
      </div>
    );
  }
}

export default CategoriesPopupFood;
