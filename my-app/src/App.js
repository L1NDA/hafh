import React, { Component }  from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Form from './Form.js';
import About from './AboutPage.js'
// import Home from './Home.js';
import Admin from './Admin.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import "./css/react-grid-layout-styles.css";
import "./css/react-resizable-styles.css";
// import Globe from './Globe.js'
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

  // state = {
  //   isTop: true,
  // };
  //
  // componentDidMount() {
  //   document.addEventListener('scroll', () => {
  //     const isTop = window.scrollY > 5;
  //     if (isTop !== this.state.isTop) {
  //         this.setState({ isTop })
  //         console.log("bot")
  //     }
  //   });
  // }

  render() {
    window.addEventListener('window-scroll', function(e) {
      console.log('Scroll position is: ' + e.detail.scrollPosition);
    });

    return (
      <div className="homepage">
        <Router>
          <Switch>
            <Route path="/" exact component={Form}/>
            <Route path="/admin" component={Admin}/>
          </Switch>
        </Router>
        <div className="aboutDiv" onClick={this.togglePopup.bind(this)}>
        <a href="#">ABOUT</a>
        {this.state.showPopup ?
          <About
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        </div>
      </div>
    );
  }
}

export default App;
