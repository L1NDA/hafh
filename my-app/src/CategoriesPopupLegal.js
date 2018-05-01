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

class CategoriesPopupLegal extends Component {
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
        <div className="info-title">What to Expect When Looking for Legal Advice</div>
          <div className="body">
            In most civil cases, an attorney will be paid under one (or a combination) of the following fee arrangements: hourly rate, flat fee, retainer, or contingency fee.
            <br></br><br></br>
            Hourly rates are the most common arrangement. In small towns, lawyers tend to charge in the range of $100-200. In major metropolitan areas, lawyers maychange in the range of $200-400.
            Several factors are typically considered when people search for legal advice, including <b className="dynamic-text">cost</b> and <b className="dynamic-text">store location</b>.
            <br></br><br></br>
            Immigrants in the <b className="dynamic-text">Chinese</b> community frequently seek legal services in <b className="dynamic-text">Quincy, Malden, Acton, Newton, and Lexington</b>.
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

export default CategoriesPopupLegal;
