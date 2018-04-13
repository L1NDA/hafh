import React, { Component } from 'react';
import classNames from "classnames";
import "./css/categories.css";
import Header from './Header.js';
// import ImageBox from './ImageBox.js'
import { HashRouter } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import FontAwesome from "react-fontawesome";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
//import Info2 from './Info2.js';
import ImageBox from "./ImageBox.js";
import Info from "./Info.js";
import Info2 from "./Info2.js";


class Categories extends Component {
  constructor (props) {
    super(props);
    this.state = {
       CategoryName: ["Food", "Housing", "Legal", "Education", "Filler", "Filler", "Filler", "Filler", "Filler", "Filler", "Filler", "Filler"],
       Link: ["https://l1nda.github.io/hafh/#/food","https://l1nda.github.io/hafh/#/home", "https://l1nda.github.io/hafh/#/food", "https://l1nda.github.io/hafh/#/food", null, null, null, null, null, null, null, null ],
       counter: 12,
       showFood:false,
       showHousing:false,
    };
    ///this.handleClick = this.handleClick.bind(this);
  }
  //
  // handleClick = () =>{
  //   if(CategoryName == "Home"){
  //     this.setState(prevState => ({
  //       showHousing: !prevState.showHousing
  //     }));
  //   }
  //   if(this.state.CategoryName == "Food"){
  //     this.setState(prevState => ({
  //       showFood: !prevState.showFood
  //     }));
  //   }
  // }

  handleClick = () => {
    console.log("clicked");
  }

  // createImg = () => {
  //   var box = []
  //   for (var i = 0; i < this.state.counter; i++) {
  //     // console.log
  //     box.push(<ImageBox link={this.state.Link[i]} onClick={() => this.handleClick()} CategoryName={this.state.CategoryName[i]} key={i}/>)
  //   }
  //   this.state.CategoryName.map(name => )
  //   return box
  // }
  render () {

    var categories = this.state.CategoryName;
    var links = this.state.Link;

    return (
      <HashRouter>
        <switch>
          <div className="categories">
            <Header button1="PROFILE" button2="LOG OUT" loggedIn={true} link="https://l1nda.github.io/hafh/#/"/>
            <div className="categories-container">
              <div className ="what-to-expect">
                {this.state.showHousing ?
                  <Info /> :
                  null
                }
              </div>
              <div className="categories-box">

                {categories.map((name, i) => {
                  return (
                    <ImageBox link={links[i]} onClick={this.handleClick} CategoryName={categories[i]} key={i}/>
                  )
                })}
              </div>
            </div>
          </div>
        </switch>
      </HashRouter>
    )
  }
}

export default Categories;

// {this.createImg()}
