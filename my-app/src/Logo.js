import React, { Component } from 'react';
import logoFull from "./img/icon-small.png";
import logoR from "./img/icon-R.png"
// var logo = require("./img/icon-small.png");


class Logo extends Component {

//   handleScroll(event) {
//     if (event.srcElement.body.scrollTop > 10) {
//       console.log("works");
//     }
// }

  render() {
    var logo = this.props.admin ? logoR : logoFull

    return (
      <a href="/" className="logo-container">
        <img className="logo" src={logo}/>
      </a>
    );
  }
}

export default Logo;
