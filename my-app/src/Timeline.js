import React, { Component } from 'react';
import classNames from "classnames";
import "./css/timeline.css";
import Header from './Header.js';
import Post from './Post.js';
import { HashRouter } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import FontAwesome from "react-fontawesome";
import Select from 'react-select';
import VirtualizedSelect from 'react-virtualized-select';
import 'react-select/dist/react-select.css';
import 'react-virtualized-select/styles.css';

const DATA = require('./cities.js');

const topics = [
{ label: 'Housing', value: 'Housing' },
{ label: 'Food', value: 'Food' },
{ label: 'Legal', value: 'Legal' },
{ label: 'Education', value: 'Education' },
];

class Timeline extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedOption: ["Housing", "Food"],
      option: "",
      postImg: ["./img/stock.jpeg", "./img/stock2.jpg"],
      myImg: "stock2",
      name: ["Sara Zandvakilli", "Manny Xiao"],
      post: ["Does anybody have recommendations as to which neighborhood I should choose/the safety of Boston neighborhoods?", "What is the best place for kbbq?"],
      postLocation: ["Boston", "Boston"],
      counter: 2,
      inputValue: "",
      selectValue: [],
      selectValueCity: "Boston",
      goodRating: [],
      badRating: [],
    }
  };

  _generateNumber = () => {
    return Math.floor(Math.random() * (50));
  }

  componentWillMount = () => {
    let good = [];
    let bad = []

    for (var i = 0; i < 2; i++) {
      good.push(this._generateNumber());
      bad.push(this._generateNumber());
    }

    this.setState({
      goodRating: good,
      badRating: bad
    })
  }

  handleChange = (option) => {
    this.setState({ option: option });
  }

  handleSelectChange = (value) => {
		// console.log('You\'ve selected:', this.state.selectValue);
    // console.log("value", value);
		this.setState({ selectValue: value }, function(){
      this.createPost();
    });
	}

  _handleClick = () => {
    console.log("clicked");

    var Option = [`${this.state.option.label}`]
    var Name = [`Manny Xiao`]
    var Post = [`${this.state.inputValue}`]
    var Img = ["./img/stock2.jpg"]
    var Good = [this._generateNumber()];
    var Bad = [this._generateNumber()];
    var City = [`${this.state.selectValueCity}`];

    var joinedOption = Option.concat(this.state.selectedOption);
    var joinedName = Name.concat(this.state.name);
    var joinedPost = Post.concat(this.state.post);
    var count = this.state.counter + 1;
    var img = Img.concat(this.state.postImg);
    var joinedGood = Good.concat(this.state.goodRating);
    var joinedBad = Bad.concat(this.state.badRating);
    var joinedCity = City.concat(this.state.postLocation);

    this.setState({
      selectedOption: joinedOption,
      name: joinedName,
      post: joinedPost,
      counter: count,
      postImg: img,
      goodRating: joinedGood,
      badRating: joinedBad,
      postLocation: joinedCity,
    });
  }

  createPost = () => {
    var posts = [];
    let splited = [];

    // filtering
    if (this.state.selectValue != "") {
      let categories = this.state.selectValue
      categories = categories.toString();
      splited = categories.split(",");
    } else {
      splited = ["Housing", "Legal", "Food", "Education"]
    }

    console.log("selectValue", splited);

    for (var i = 0; i < this.state.counter; i++) {
      console.log("option", this.state.selectedOption[i]);
      console.log("postlocation", this.state.postLocation);
      console.log("postlocation[i]", this.state.postLocation[i]);
      console.log("selected city", this.state.selectValueCity);
      if (splited.includes(this.state.selectedOption[i]) && this.state.postLocation[i] === this.state.selectValueCity){
        posts.push(<Post
          img={this.state.postImg[i]}
          type={this.state.selectedOption[i]}
          name={this.state.name[i]}
          post={this.state.post[i]}
          key={i}
          good={this.state.goodRating[i]}
          bad={this.state.badRating[i]}
        />)
      }
    }
    return posts
  }

  sortPostsRatings = () => {
    let totalRatingsArray = [];
    for (var i; i < goodRating.length; i++) {
      let totalRatings = (this.state.goodRating[i] - this.state.badRating[i], i);
      totalRatingsArray.push(totalRatings);
    }
    console.log(totalRatingsArray);
  }

  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }

  updateValue = (newValue) => {
    console.log("newValue", newValue);
		this.setState({
			selectValueCity: newValue
		});
	}

  render () {
    const value = this.state.option && this.state.option.value;
    var btnClass = classNames('postButton');
    if (this.state.option) {
      btnClass += ` ${this.state.option.label}`
    };

    var options = DATA.CITIES

    return (
      <HashRouter>
        <switch>
          <div className="timeline">
            <Header button1="PROFILE" button2="LOG OUT" link="https://l1nda.github.io/hafh/#/"/>
            <div className="timeline-content">
              <div className="search-bar">
                <input type="text" placeholder="Make a post!" className="search" onChange={evt => this.updateInputValue(evt)}/>
                <Select
                  className="timeline-select"
                  name="form-field-name"
                  value={value}
                  placeholder="Category*"
                  onChange={this.handleChange}
                  options={[
                    { value: 'one', label: 'Housing' },
                    { value: 'two', label: 'Food' },
                  ]}
                />
              <div className={btnClass} onClick={this._handleClick}>POST</div>
              </div>
              <div className="timeline-title">YOUR FEED</div>
              <div className="search-bar-2">
                <div class="city-wrapper">
                  <div class="city-title">Your current city:</div>
                  <VirtualizedSelect ref="citySelect"
                    className="timeline-multiselect"
          					options={options}
          					simpleValue
          					clearable
          					name="select-city"
          					value={this.state.selectValueCity}
          					onChange={this.updateValue}
          					searchable
          					labelKey="name"
          					valueKey="name"
          				/>
                </div>

                <Select
                  className="timeline-multiselect"
        					closeOnSelect={false}
        					multi
                  joinValues
        					onChange={this.handleSelectChange}
        					options={topics}
        					placeholder="Filter by Category"
                  removeSelected={true}
        					simpleValue
        					value={this.state.selectValue}
        				/>

              </div>
              {this.createPost()}
            </div>
          </div>
        </switch>
      </HashRouter>
    )
  }
}

export default Timeline;
