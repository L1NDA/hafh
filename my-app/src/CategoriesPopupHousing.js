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
          <div className="info-title">What to Expect When <br></br>Looking for Housing</div>
            <div className="body">
                Several factors are typically considered when people look for housing, including <b className="dynamic-text"> cost and location</b>.
                <br/><br/>
                <form>
                    The average cost to rent a <input type="text" placeholder="1" className="bedroom"></input>-bedroom
                    , <input type="text" placeholder="1" className="bathroom"></input>-bathroom listing in Boston is <b className="dynamic-text">$___</b> per month.
                    You may find that the most affordable option is to share your living space or rent out of a larger home.
                </form><br/>
                Immigrants in the <b className="dynamic-text">Chinese</b> community frequently choose to live in <b className="dynamic-text">Quincy, Malden, Acton, Newton, and Lexington</b>.
                <br/><br/>
                <Iframe
                    url="https://www.google.com/maps/d/embed?mid=1_XFwbb5WOTNpAU_zk_unEkuUM9nOLL8T"
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

export default CategoriesPopupLegal;
