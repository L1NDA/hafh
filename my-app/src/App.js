import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Homepage from './Homepage.js';
import Timeline from './Timeline.js';
import Signup from './Signup.js';
import Categories from './Categories.js';
import Categories2 from './Categories2.js';
import SinglePostPage from './SinglePostPage.js';
import Info from './Info.js';
import Info2 from './Info2.js';
import Messages from './Messages.js';
import Profile from './Profile.js';
import ProfileSara from './ProfileSara.js';
import MessageSara from './MessageSara.js';
import { HashRouter } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import "./css/react-grid-layout-styles.css";
import "./css/react-resizable-styles.css";
import ScrollManager from 'window-scroll-manager'

class App extends Component {

  constructor (props) {
    super(props);

  }

  render() {

    return (
      <div className="homepage">
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path="/timeline" component={Timeline}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/categories" exact component={Categories}/>
            <Route path="/post" exact component={SinglePostPage}/>
            <Route path="/housing" exact component={Info}/>
            <Route path="/food" exact component={Info2}/>
            <Route path="/messages" exact component={Messages}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/sara" exact component={ProfileSara}/>
            <Route path="/message-sara" exact component={MessageSara}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
