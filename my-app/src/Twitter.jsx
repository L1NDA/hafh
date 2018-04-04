import React, { Component } from 'react';
import classNames from "classnames";
import { Timeline } from 'react-twitter-widgets'



import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import "./admin.css";

class Twitter extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }

    this.spanStyles = {
      gridColumn: 1,
      gridRow: 1,
      backgroundColor: "blue",
    }

    if (props.colspan !== 1) {
      this.spanStyles.gridColumn
      = `span ${props.colspan}`;
    }
    if (props.rowspan !== 1) {
      this.spanStyles.gridRow
      = `span ${props.rowspan}`;
    }
  if (this.props.color) {
      this.spanStyles.backgroundColor = this.props.color;
  }
  }

  // const spanStyles = {
  //
  // }

  render () {
    var widget1 = classNames ({
      widget: true,
      showing: true
    })

    return (


  <Timeline
    className="working"
    dataSource={{
      sourceType: 'collection',
      id: '954300666046017537'
    }}
    options={{
      theme: "dark",
      height: '400px'

    }}
    onLoad={() => console.log('Timeline is loaded!')}
  />



    )
  }
}

export default Twitter;

Twitter.defaultProps = {
  heading: "Unnamed Widget",
  colspan: 1,
  rowspan: 1,
  color: "blue"
}

Twitter.propTypes = {
  heading: PropTypes.string,
  colspan: PropTypes.number,
  rowspan: PropTypes.number,
  color: PropTypes.string
  // children:
  //   React.PropTypes.element.isRequired
}
