import React, { Component } from 'react';
import classNames from "classnames";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import "./admin.css";

class Widget extends Component {
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
      widget: true
    })

    return (
        <div className={widget1} style={ this.spanStyles }>

        </div>
    )
  }
}

export default Widget;

Widget.defaultProps = {
  heading: "Unnamed Widget",
  colspan: 1,
  rowspan: 1,
  color: "blue"
}

Widget.propTypes = {
  heading: PropTypes.string,
  colspan: PropTypes.number,
  rowspan: PropTypes.number,
  color: PropTypes.string
  // children:
  //   React.PropTypes.element.isRequired
}
