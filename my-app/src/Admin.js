import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import classNames from "classnames";
import "./admin.css";
import Widget from "./Widgets.jsx";
import Twitter from "./Twitter.jsx";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ReactGridLayout from "react-grid-layout";
import "./css/react-grid-layout-styles.css";
import "./css/react-resizable-styles.css";
import Donut from "./Donut.js";
import Logo from "./Logo.js"
import Graph from "./Graph.js"
import MapContainer from "./Map.js";
// import gif from "./img/hacker-35.gif";
import FontAwesome from "react-fontawesome";
// import 'font-awesome/css/font-awesome.css'
import searchImg from "./img/search.png"

class Admin extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {
    var statsColor = classNames ({
      widget: true,
      statscoloring: true
    })
    var twitter = classNames ({
      widget: true,
      twittercoloring: true,
      widgetnopad: true
    })
    var graphColor = classNames ({
      widget: true,
      graphcoloring: true
    })
    var mapColor = classNames ({
      widget: true,
      mapcoloring: true
    })
    var reportColor = classNames ({
      widget: true,
      reportcoloring: true
    })
    var title = classNames ({
      widget: true,
      titleAndSearch: true,
      label: true
    })
    var polar = classNames ({
      widget: true,
      polar: true
    })

    var label = classNames ({
      label: true
    })

    var layout = [
      {i: 'Graph', x: 3, y: 5, w: 7, h: 3, minW: 2, minH: 2},
      {i: 'Stats', x: 8, y: 0, w: 2, h: 3, minW: 2, minH: 2},
      {i: 'Twitter', x: 0, y: 3, w: 3, h: 4, minW: 3, minH: 4, maxW: 3, maxH: 5},
      {i: 'Map', x: 3, y: 0, w: 5, h: 4, minW: 4, minH: 4},
      {i: 'Polar', x: 0, y: 0, w: 3, h: 3, minW: 2, minH: 2},
      {i: 'Report', x: 8, y: 2, w: 2, h: 1, minW: 2, minH: 1},
      {i: 'Title', x: 0, y: 0, w: 10, h: 1, static: true}
    ];

    return (
        <div className="admin">
          <Logo admin={true}/>
          <ReactGridLayout margin={[30, 30]} className="grid" layout={layout} cols={10} rowHeight={75} width={1000}>
          <div key="Title"  className={title}>
            <h2>Vancouver, BC Canada</h2>
            <div className="img-container">
              <input type="text" name="name" placeholder="SEARCH LOCATION" className="search"/>
              <img src={searchImg} className="search-img"></img>
            </div>

          </div>
            <div key="Stats"   className={statsColor}>
              <h3 className={label}>STATS</h3>
              <h4><b>7</b> people have confirmed a violent event.<br></br>
                  <b>71%</b> certainty.<br></br>
                  <b>3,641</b> upset tweets.<br></br>
                  <b>241</b> angry tweets.<br></br>
                  <b>927</b> tweets inciting action.<br></br>
                  <b>78</b> violent tweets.<br></br></h4>
            </div>
            <div key="Graph" className={graphColor}>
              <h3 className={label}>GRAPH</h3>
              <Graph/>
            </div>

            <div key="Twitter" className={twitter}><Twitter/></div>

            <div key="Map"   className={mapColor}>
              <h3 className={label}>MAP</h3>
              <MapContainer />
            </div>
            <div key="Polar"   className={polar}>
              <Donut/>
            </div>
            <div key="Report"   className={reportColor}>
              <h3 className={label}>REPORT UNREST</h3>
            </div>
          </ReactGridLayout>
        </div>
    )
  }
}

export default Admin;

// <div className="grid">
//   <Widget colspan={2} color="green"/>
//   <Widget />
// </div>

// <FontAwesome name="rocket" className="searchIcon"/>
