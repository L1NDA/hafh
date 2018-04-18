import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import classNames from "classnames";
import './css/categories.css';
import ImgRoot from "./img/heart.png";
import ImageBox from './ImageBox.js';
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
          CategoryName: ["Food", "Housing", "Legal", "Education", "Filler", "Filler", "Filler", "Filler", "Filler", "Filler", "Filler", "Filler"],
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
          <div className="categories-box">

            {categories.map((name, i) => {
              return (
                <ImageBox onClick={this.handleClick} class={categoriesClassNames[i]} CategoryName={categories[i]} key={i}/>
              )
            })}
          </div>
        </div>
    );
  }
}

export default CategoriesPopup;
