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
import CategoriesPopupDefault from './CategoriesPopupDefaultOnboarding.js';
import CategoriesPopupEducation from './CategoriesPopupEducation.js';
import CategoriesPopupFood from './CategoriesPopupFood.js';
import CategoriesPopupLegal from './CategoriesPopupLegal.js';
import CategoriesPopupHousing from './CategoriesPopupHousing.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import "./css/react-grid-layout-styles.css";
import "./css/react-resizable-styles.css";
import "./css/categories.css";

class CategoriesPopupOnboarding extends Component {
    constructor (props) {
        super(props);
        this.handleModal = this.handleModal.bind(this);
        this.state = {
          CategoryName: ["Food", "Housing", "Legal", "Education"],
          modalType: "Default",
        }
    }
    // <a href={this.props.link} className="imagebox-container">

    handleModal = (category) => {
      this.setState({
        modalType: category
      })
    }

    renderModal = () => {
      if (this.state.modalType === "Default") {
        return <CategoriesPopupDefault chosen={this.props.chosen} handleCategoryFunction={this.props.handleCategoryFunction} handleModal={this.handleModal} CategoryName="Default"/>
      }
      else if (this.state.modalType === "Education") {
        return <CategoriesPopupEducation handleModal={this.handleModal} CategoryName="Default"/>
      }
      else if (this.state.modalType === "Legal") {
        return <CategoriesPopupLegal handleModal={this.handleModal} CategoryName="Default"/>
      }
      else if (this.state.modalType === "Food") {
        return <CategoriesPopupFood handleModal={this.handleModal} CategoryName="Default"/>
      }
      else if (this.state.modalType === "Housing") {
        return <CategoriesPopupHousing handleModal={this.handleModal} CategoryName="Default"/>
      }
    }

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
        <div className="categories-scroll">
          {this.renderModal()}
      </div>
    );
  }
}

export default CategoriesPopupOnboarding;
