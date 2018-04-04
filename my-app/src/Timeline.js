import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import classNames from "classnames";
import "./css/timeline.css";
import Header from './Header.js';
import Post from './Post.js';
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
      selectedOption: '',
    }
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // console.log(`Selected: ${selectedOption.label}`);
  }

  render () {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;
    var btnClass = classNames('postButton');
    if (selectedOption) {
      btnClass += ` ${selectedOption.label}`
    }

    return (
      <Router>
        <switch>
          <div className="timeline">
            <Header button1="PROFILE" button2="LOG OUT"/>
            <div className="timeline-content">
              <div className="search-bar">
                <input type="text" placeholder="Make a post!" className="search"/>
                <Select
                  className="timeline-select"
                  name="form-field-name"
                  value={value}
                  onChange={this.handleChange}
                  options={[
                    { value: 'one', label: 'Home' },
                    { value: 'two', label: 'Food' },
                  ]}
                />
              <div className={btnClass}>POST</div>
              </div>
              <Post type={selectedOption ? selectedOption.label : null}/>
              <Post type={selectedOption ? selectedOption.label : null}/>
              <Post type={selectedOption ? selectedOption.label : null}/>
            </div>
          </div>
        </switch>
      </Router>
    )
  }
}

export default Timeline;
