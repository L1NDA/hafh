import React, { Component }  from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Homepage from './Homepage.js';
import Timeline from './Timeline.js';
import Signup from './Signup.js';
import Signup2 from './Signup2.js';
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
        <Router>
          <Switch>
            <Route path="/hafh/" exact component={Homepage}/>
            <Route path="/hafh/timeline" component={Timeline}/>
            <Route path="/hafh/signup" exact component={Signup}/>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
