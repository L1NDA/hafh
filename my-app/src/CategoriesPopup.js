import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import classNames from "classnames";
import './css/categories.css';
import ImgRoot from "./img/heart.png";
import ImageBox from './ImageBox.js';
import ImageBoxFood from './ImageBoxFood.js';
import ImageBoxHousing from './ImageBoxHousing.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import "./css/react-grid-layout-styles.css";
import "./css/react-resizable-styles.css";
import "./css/categories.css";

class CategoriesPopup extends Component {
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

    console.log("categories", categoriesClassNames);

    return (
        <div className="categories-scroll">
            <ImageBoxFood onClick={this.handleClick} class={categoriesClassNames[0]} CategoryName={categories[0]}/>
            <ImageBoxHousing onClick={this.handleClick} class={categoriesClassNames[1]} CategoryName={categories[1]}/>
            <ImageBox onClick={this.handleClick} class={categoriesClassNames[2]} CategoryName={categories[2]}/>
            <ImageBox onClick={this.handleClick} class={categoriesClassNames[3]} CategoryName={categories[3]}/>
        </div>
    );
  }
}

export default CategoriesPopup;