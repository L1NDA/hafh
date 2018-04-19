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
import 'react-select/dist/react-select.css';

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
    }

  };

  componentWillMount = () => {

    if(JSON.parse(localStorage.getItem("selectedoption"))){

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
      goodRating:JSON.parse(localStorage.getItem("goodRating")),
      badRating: JSON.parse(localStorage.getItem("badRating")),
    })}

    else{
      this.setState({
      selectedOption: ["Housing",],
      option: "",
      postImg: ["./img/stock.jpeg",],
      myImg: "stock2",
      name: ["Sara Zandvakilli",],
      post: ["Does anybody have recommendations as to which neighborhood I should choose/the safety of Boston neighborhoods?",],
      counter: 1,
      inputValue: "", 
      selectValue: [],
      goodRating:[5,],
      badRating:[1,],
    })
    }
  }

  saveStuff = () => {
  console.log("saved");
  localStorage.setItem("names", JSON.stringify(this.state.name))
  localStorage.setItem("posts", JSON.stringify(this.state.post))
  localStorage.setItem("counter", JSON.stringify(this.state.counter))
  localStorage.setItem("postimgs", JSON.stringify(this.state.postImg))
  localStorage.setItem("goodRating", JSON.stringify(this.state.goodRating))
  localStorage.setItem("badRating", JSON.stringify(this.state.badRating))
  localStorage.setItem("selectedoption", JSON.stringify(this.state.selectedOption))

  }


  handleChange = (option) => {
    this.setState({ option: option });
  }

  handleSelectChange = (value) => {
		console.log('You\'ve selected:', this.state.selectValue);
    console.log("value", value);
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
    var good =[0]
    var bad = [0] 

    var joinedOption = Option.concat(this.state.selectedOption);
    var joinedName = Name.concat(this.state.name);
    var joinedPost = Post.concat(this.state.post);
    var count = this.state.counter + 1;
    var img = Img.concat(this.state.postImg);
    var goodRating = good.concat(this.state.goodRating); 
    var badRating = bad.concat(this.state.badRating);

    this.setState({
      selectedOption: joinedOption,
      name: joinedName,
      post: joinedPost,
      counter: count,
      postImg: img,
      goodRating: goodRating,
      badRating: badRating,


    });
  }

  createPost = () => {
    var posts = [];
    let splited = [];
    if (this.state.selectValue != "") {
      let categories = this.state.selectValue
      categories = categories.toString();
      splited = categories.split(",");
    } else {
      splited = ["Housing", "Legal", "Food", "Education"]
    }
    console.log("splited", splited);
    for (var i = 0; i < this.state.counter; i++) {
      console.log("option", this.state.selectedOption[i]);
      if (splited.includes(this.state.selectedOption[i])){
        posts.push(<Post img={this.state.postImg[i]} type={this.state.selectedOption[i]} name={this.state.name[i]} post={this.state.post[i]} goodRating ={this.state.goodRating[i]} badRating ={this.state.badRating[i]} saveStuff = {this.state.saveStuff} key={i}/>)
      }
    }
   
    return posts
  }

  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render () {
    const value = this.state.option && this.state.option.value;
    var btnClass = classNames('postButton');
    if (this.state.option) {
      btnClass += ` ${this.state.option.label}`
    }


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
                <Select
                  className="timeline-multiselect"
        					closeOnSelect={false}
        					multi
                  joinValues
        					onChange={this.handleSelectChange}
        					options={topics}
        					placeholder="Filter*"
                  removeSelected={true}
        					simpleValue
        					value={this.state.selectValue}
        				/>

              </div>
              {this.createPost()}
              {this.saveStuff()}
            </div>
          </div>
        </switch>
      </HashRouter>
    )
  }
}

export default Timeline;
