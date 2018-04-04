import React, { Component } from 'react';
import classNames from "classnames";
import { Polar } from 'react-chartjs-2';

class Donut extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getState = () => ({
      labels: [
        'Negative',
        'Neutral',
        'Positive'
      ],
      datasets: [{
        data: [this.getRandomInt(75, 100), this.getRandomInt(25, 75), this.getRandomInt(0, 25)],
        backgroundColor: [
        '#A8ABFF',
        '#69BFFF',
        '#43F7DD',
        ],
        hoverBackgroundColor: [
        '#BA3239',
        '#636363',
        '#5BAB4B'
        ]
      }],
  });

  getInitialState() {
		return this.getState();
	}

	componentWillMount() {
		setInterval(() => {
			this.setState(this.getState());
		}, 2000);
	}

  render () {
    const options = {
        legend: {display: false},
        scales: { xAxes: [{ display: false, }], yAxes: [{ display: false, }], },
        maintainAspectRatio: false,
        elements: {arc: {borderColor: "black", borderWidth: "3"}},
        scale: {
          gridLines: {color: "#43F7DD"},
          ticks: {fontColor: "#43F7DD", fontFamily: "Proxima Nova", backdropColor: "black"},
        },
        layout: {padding: 1, position: "chartArea"}
    }

    const grid = {
      color: "white"
    }

    return (
      <Polar data={this.state} options={options} gridLines={grid}/>
    )
  }
}

export default Donut;
