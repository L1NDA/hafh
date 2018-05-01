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

class CategoriesPopupEducation extends Component {
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
            <div className="info-title">What to Expect When<br></br> Looking for Education</div>
              <div className="body">
                Several factors are typically considered when people search for Education including <b className="dynamic-text">cost</b> and <b className="dynamic-text">accessibility</b>.<br/>
                <br/>
                The average cost of tuition at a <input type="text" className="type" placeholder="public"></input>  University in Boston is <b className="dynamic-text">$___</b>.
                You may find that the most affordable option is to take classes online.<br/>
                <br/>
                Less than 20% of Immigrants have a college degree.
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

export default CategoriesPopupEducation;
