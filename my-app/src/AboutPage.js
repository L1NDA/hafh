import React, { Component } from 'react';
import Logo from "./Logo.js";
import './App.css';
import rachel from "./img/team/Rachel.png"
import kyle from "./img/team/Kyle.png"
import linda from "./img/team/Linda.png"
import sophie from "./img/team/Sophie.png"
import zack from "./img/team/Zack.png"
import lucas from "./img/team/Lucas.png"

// var logo = require("./img/icon-small.png");


class About extends Component {
  render() {
    return (
      <div className="aboutPage">
      <div className="closeDiv">
      <p onClick={this.props.closePopup}>&times;</p>
      </div>
      <h3>ABOUT</h3>
      <p>Revolver is a data analytics service that uses deep learning to
      forecast global trends (e.g., rioting, crime, epidemics). Through social
       media mining, the Revolver team seeks to harness the power of AI and
       deep neural networks to gain hidden insights into big data on a global
       scale.</p>
       <h3>TEAM</h3>
       <div className="imgRow">
          <img className="teamPic" src={kyle}/>
          <img className="teamPic" src={linda}/>
          <img className="teamPic" src={lucas}/>
       </div>
       <div className="imgRow">
       <img className="teamPic" src={sophie}/>
       <img className="teamPic" src={zack}/>
       <img className="teamPic" src={rachel}/>
       </div>

      </div>
    );
  }
}

export default About;
