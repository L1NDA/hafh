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
       CategoryName: ["Food", "Housing", "Legal", "Education"],
       GridImg: ["./img/food.jpg","./img/home.jpg", "./img/legal.jpg", "./img/education.jpg" ],
       Link: ["https://l1nda.github.io/hafh/#/food","https://l1nda.github.io/hafh/#/home", "https://l1nda.github.io/hafh/#/food", "https://l1nda.github.io/hafh/#/food" ],
       counter: 4,
       showFood:false,
       showHousing:false,
    };
    ///this.handleClick = this.handleClick.bind(this);
  }

  // handleClick = () =>{
  //   console.log("click working");
  //   if(this.state.CategoryName == "Home"){
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

  createImg = () => {
    var box = []
    for (var i = 0; i < this.state.counter; i++) {
      // console.log
      box.push(<ImageBox link ={this.state.Link[i]}  GridImage={this.state.GridImg[i]} CategoryName={this.state.CategoryName[i]} key={i}/>)
    }
    return box
  }
  render () {

    return (
      <HashRouter>
        <switch>
          <div className="categories">
            <Header button1="PROFILE" button2="LOG OUT" link="https://l1nda.github.io/hafh/#/"/>
            <div className ="what-to-expect">
            {this.state.showHousing ?
              <Info /> :
              null
            }
            {this.state.showFood ?
              <Info2 /> :
              null
            }
            </div>           
            <div className="categories-box">
              {this.createImg()}
            </div>
          </div>
        </switch>
      </HashRouter>
    )
  }
}

export default Categories;
