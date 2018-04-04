import React, { Component }  from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Homepage from './Homepage.js';
import Timeline from './Timeline.js';
import Signup from './Signup.js';
// import Signup2 from './Signup2.js';
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
    const sm = new ScrollManager()
    this.state = {
      showPopup: false
    }
  }
    togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });

  }

  render() {
    window.addEventListener('window-scroll', function(e) {
      console.log('Scroll position is: ' + e.detail.scrollPosition);
    });

    return (
      <div className="homepage">
        <Router>
          <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path="/timeline" component={Timeline}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/signup2" exact component={Signup2}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
