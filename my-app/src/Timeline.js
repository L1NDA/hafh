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

class Timeline extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedOption: ["Home"],
      option: "",
      postImg: ["./img/stock.jpeg"],
      myImg: "stock2",
      name: ["Sara Zandvakilli"],
      post: ["Does anybody have recommendations as to which neighborhood I should choose/the safety of Boston neighborhoods?"],
      counter: 1,
      inputValue: "",
    }
  }

  handleChange = (option) => {
    this.setState({ option: option });
  }

  _handleClick = () => {
    console.log("clicked");

    var Option = [`${this.state.option.label}`]
    var Name = [`Manny Xiao`]
    var Post = [`${this.state.inputValue}`]
    var Img = ["./img/stock2.jpg"]

    var joinedOption = Option.concat(this.state.selectedOption);
    var joinedName = Name.concat(this.state.name);
    var joinedPost = Post.concat(this.state.post);
    var count = this.state.counter + 1;
    var img = Img.concat(this.state.postImg);

    this.setState({
      selectedOption: joinedOption,
      name: joinedName,
      post: joinedPost,
      counter: count,
      postImg: img
    });
  }

  createPost = () => {
    var posts = []
    for (var i = 0; i < this.state.counter; i++) {
      posts.push(<Post img={this.state.postImg[i]} type={this.state.selectedOption[i]} name={this.state.name[i]} post={this.state.post[i]} key={i}/>)
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
            <Header button1="PROFILE" button2="LOG OUT"/>
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
                    { value: 'one', label: 'Home' },
                    { value: 'two', label: 'Food' },
                  ]}
                />
              <div className={btnClass} onClick={this._handleClick}>POST</div>
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
