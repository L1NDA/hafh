import React, { Component } from 'react';
import classNames from "classnames";
import "./css/messages.css";
import Header from './Header.js';
import Message from './Message.js';
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

class Messages extends Component {
  constructor (props) {
    super(props);
    this.state = {
      postImg: ["./img/stock.jpeg", "./img/stock2.jpg"],
      myImg: "stock2",
      name: ["Sara Zandvakilli"],
      post: ["I currently live in the Allston Brighton area, and I think that it is..."],
      counter: 1,
      selectedOption: ["Housing"]
    }
  };

  createMessages = () => {
    var messages = [];

    for (var i = 0; i < this.state.counter; i++) {{
        messages.push(<Message
          img={this.state.postImg[i]}
          type={this.state.selectedOption[i]}
          name={this.state.name[i]}
          post={this.state.post[i]}
          key={i}
        />)
      }
    }
    return messages
  }

  render () {

    return (
      <HashRouter>
        <switch>
          <div className="messages">
            <Header button1="PROFILE" button2="LOG OUT" loggedIn={true} link="https://l1nda.github.io/hafh/#/"/>
            <div className="messages-content">
              <div className="messages-title">YOUR MESSAGES</div>
              {this.createMessages()}
            </div>
          </div>
        </switch>
      </HashRouter>
    )
  }
}

export default Messages;
