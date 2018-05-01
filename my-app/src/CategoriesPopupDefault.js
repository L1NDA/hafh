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

class CategoriesPopupDefault extends Component {
    constructor (props) {
        super(props);
        this.state = {
          CategoryName: ["Food", "Housing", "Legal", "Education"],
        }
    }
    // <a href={this.props.link} className="imagebox-container">

    render() {

    var categories = this.state.CategoryName;

    var categoriesClassNames = [];

    for (var i = 0; i < categories.length; i++) {
        categoriesClassNames[i] = classNames(`${categories[i]}-selector ImageBox`);
      if (this.props.chosen.includes(categories[i])) {
        categoriesClassNames[i] += ` chosen`
      } else {
        categoriesClassNames[i] += ` not-chosen`
      };
    }

    return (
        <div className="generic-container vertical-flex default">
          <div className="categories-scroll-title">CATEGORIES</div>
          <div className="categories-scroll-row">
            <ImageBoxFood handleCategoryFunctionChild={this.props.handleCategoryFunction} handleModal={this.props.handleModal} class={categoriesClassNames[0]} CategoryName={categories[0]}/>
            <ImageBoxHousing handleCategoryFunctionChild={this.props.handleCategoryFunction} handleModal={this.props.handleModal} class={categoriesClassNames[1]} CategoryName={categories[1]}/>
          </div>
          <div className="categories-scroll-row">
            <ImageBoxLegal handleCategoryFunctionChild={this.props.handleCategoryFunction} handleModal={this.props.handleModal} class={categoriesClassNames[2]} CategoryName={categories[2]}/>
            <ImageBoxEducation handleCategoryFunctionChild={this.props.handleCategoryFunction} handleModal={this.props.handleModal} class={categoriesClassNames[3]} CategoryName={categories[3]}/>
          </div>
          <div className="categories-scroll-text">Click on the boxes to enable/disable the category, and on the info button to learn more about the topic. More categories coming soon!</div>
      </div>
    );
  }
}

export default CategoriesPopupDefault;
