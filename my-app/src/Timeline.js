import React, { Component } from 'react';
import classNames from "classnames";
import "./css/timeline.css";
import Header from './Header.js';
import Post from './Post.js';
import CategoriesPopup from './CategoriesPopup.js';
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

      // selectedOption: ["Housing","Food"],
      // option: "",
      // postImg: ["./img/stock.jpeg","./img/stock.jpeg"],
      // myImg: "stock2",
      // name: ["Sara Zandvakilli","Sara Zandvakilli"],
      // post: ["Does anybody have recommendations as to which neighborhood I should choose/the safety of Boston neighborhoods?", "or nah?"],
      // counter: 2,
      // inputValue: "",
      // selectValue: [],
      // goodRating:[5,1],
      // badRating:[1,10],
      chosen: false,

    }

  };

  _generateNumber = () => {
    return Math.floor(Math.random() * (50));
  }

  componentWillMount = () => {

    if(JSON.parse(localStorage.getItem("posts"))){

    this.setState({
      selectedOption: JSON.parse(localStorage.getItem("selectedoption")),
      option: "",
      postImg: JSON.parse(localStorage.getItem("postimgs")),
      myImg: "stock2",
      name: JSON.parse(localStorage.getItem("names")),
      post: JSON.parse(localStorage.getItem("posts")),
      counter: JSON.parse(localStorage.getItem("counter")),
      inputValue: "",
      selectValue: [],
      postLocation: JSON.parse(localStorage.getItem("postLocation")),
      selectValueCity: JSON.parse(localStorage.getItem("selectValueCity")),
    })}

    else{
      this.setState({
      selectedOption: ["Housing", "Food", "Legal", "Education"],
      option: "",
      postImg: ["./img/stock.jpeg", "./img/stock.jpeg"],
      myImg: "stock2",
      name: ["Sara Zandvakilli","Sara Zandvakilli"],
      post: ["Does anybody have recommendations as to which neighborhood I should choose/the safety of Boston neighborhoods?", "Yamatos is a really great place for a sushi buffet, but a little pricy."],
      counter: 2,
      inputValue: "",
      selectValue: [],
      postLocation: ["Boston", "Boston"],
      selectValueCity: "Boston",
    })
    }

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

  componentDidUpdate = () => {
    this.saveStuff();
  }

  saveStuff = () => {
  console.log("saved");
  localStorage.setItem("names", JSON.stringify(this.state.name))
  localStorage.setItem("posts", JSON.stringify(this.state.post))
  localStorage.setItem("counter", JSON.stringify(this.state.counter))
  localStorage.setItem("postimgs", JSON.stringify(this.state.postImg))
  localStorage.setItem("selectedoption", JSON.stringify(this.state.selectedOption))
  localStorage.setItem("postLocation", JSON.stringify(this.state.postLocation))
  localStorage.setItem("selectValueCity", JSON.stringify(this.state.selectValueCity))
  }


  handleChange = (option) => {
    this.setState({ option: option });
  }

  handleChangeSort = (option) => {
    if (option) {
      if (option.label === "Highest Rated") {
        let totalRatingsArray = [];
        let length = this.state.goodRating.length;

        for (var i = 0; i < length; i++) {
          let totalRatings = this.state.goodRating[i] - this.state.badRating[i];
          let tuple = [totalRatings, i];
          totalRatingsArray.push(tuple);
        };

        let sortedRatings = totalRatingsArray.sort(function(a,b){return b[0] - a[0]});
        console.log("Highest Rated", sortedRatings);
        this.sortPostsRatings(sortedRatings);
      } else {
        let totalRatingsArray = [];
        let length = this.state.goodRating.length;

        for (var i = 0; i < length; i++) {
          let totalRatings = this.state.goodRating[i] + this.state.badRating[i]
          let tuple = [totalRatings, i];
          totalRatingsArray.push(tuple);
        };

        let sortedRatings = totalRatingsArray.sort(function(a,b){return b[0] - a[0]});
        console.log("sortedRatings", sortedRatings);
        this.sortPostsRatings(sortedRatings);
      }
      this.setState({ sorting: option });
    }

  }

  sortPostsRatings = (sortedRatings) => {
    console.log("new var", sortedRatings);


    let sortedArray = [];

    let OptionArray = []
    let NameArray = []
    let PostArray = []
    let ImgArray = []
    let GoodArray = [];
    let BadArray = [];
    let CityArray = [];

    let length = this.state.goodRating.length
    console.log("length", this.state.goodRating.length);

    for (var i = 0; i < length; i++) {
      var Option = `${this.state.selectedOption[sortedRatings[i][1]]}`;
      var Name = `${this.state.name[sortedRatings[i][1]]}`;
      var Post = `${this.state.post[sortedRatings[i][1]]}`;
      var Img = `${this.state.postImg[sortedRatings[i][1]]}`;
      var Good = `${this.state.goodRating[sortedRatings[i][1]]}`;
      var Bad = `${this.state.badRating[sortedRatings[i][1]]}`;
      var City = `${this.state.postLocation[sortedRatings[i][1]]}`;

      OptionArray.push(Option);
      NameArray.push(Name);
      PostArray.push(Post);
      ImgArray.push(Img);
      GoodArray.push(Good);
      BadArray.push(Bad);
      CityArray.push(City);
    }

    this.setState({
      selectedOption: OptionArray,
      name: NameArray,
      post: PostArray,
      postImg: ImgArray,
      goodRating: GoodArray,
      badRating: BadArray,
      postLocation: CityArray,
    }, function() {
      console.log(this.state);
      this.createPost();
    });
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
    var Good = [0];
    var Bad = [0];
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

  _handleChosenClick = () => {
    this.setState({
      chosen: !this.state.chosen
    })
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
      console.log("create post good", this.state.goodRating[i]);
      console.log("create post bad", this.state.badRating[i]);
      console.log("create post name", this.state.name[i]);
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

    var options = DATA.CITIES;

    var categories = this.state.CategoryName;

    let chosen = [];

    // filtering
    if (this.state.selectValue != "") {
      let categories = this.state.selectValue
      categories = categories.toString();
      chosen = categories.split(",");
    } else {
      chosen = ["Housing", "Food"]
    };

    return (
      <HashRouter>
        <switch>
          <div className="timeline">
            <Header button1="PROFILE" button2="LOG OUT" loggedIn={true} link="https://l1nda.github.io/hafh/#/"/>
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
                <div className="city-wrapper">
                  <div className="city-title">Your current city:</div>
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
                  className="timeline-select"
                  name="form-field-name"
                  value={this.state.sorting}
                  placeholder="Sort By"
                  onChange={this.handleChangeSort}
                  options={[
                    { value: 'two', label: 'Highest Rated' },
                    { value: 'three', label: 'Most Popular' },
                  ]}
                />

              </div>
              {this.createPost()}
            </div>
            {this.state.chosen ?
              <div>
                <div className="show-categories sc-open" onClick={this._handleChosenClick}>Hide Topics</div>
                <CategoriesPopup chosen={chosen}/>
              </div> :
              <div className="show-categories" onClick={this._handleChosenClick}>View Topic Tags</div>
            }
          </div>
        </switch>
      </HashRouter>
    )
  }
}

export default Timeline;

// {<Select
//   className="timeline-multiselect"
// 	closeOnSelect={false}
// 	multi
//   joinValues
// 	onChange={this.handleSelectChange}
// 	options={topics}
// 	placeholder="Filter by Category"
//   removeSelected={true}
// 	simpleValue
// 	value={this.state.selectValue}
// />}
