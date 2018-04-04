import React, { Component } from 'react';
import classNames from "classnames";
import { Line } from 'react-chartjs-2';

class Graph extends Component {
  constructor (props) {
    super(props);
    this.state = {
      current: "#ferguson"
    }
  }

  getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getState = () => ({
    labels: ['5pm', '6pm', '7pm', '8pm', '9pm', '10pm', "11pm"],
    datasets: [
      {
        label: 'Negative',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: '#A8ABFF',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'white',
        pointBackgroundColor: 'white',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#A8ABFF',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 10,
        data: [this.getRandomInt(0, 25), this.getRandomInt(0, 25), this.getRandomInt(30, 50), this.getRandomInt(50, 75), this.getRandomInt(75, 100), this.getRandomInt(75, 100), this.getRandomInt(85, 100)]
      },
      {
        label: 'Neutral',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: '#69BFFF',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'white',
        pointBackgroundColor: 'white',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#69BFFF',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 10,
        data: [this.getRandomInt(40, 60), this.getRandomInt(40, 60), this.getRandomInt(40, 60), this.getRandomInt(40, 60), this.getRandomInt(40, 60), this.getRandomInt(40, 60), this.getRandomInt(40, 60)]
      },
      {
        label: 'Positive',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: "#43F7DD",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'white',
        pointBackgroundColor: 'white',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#43F7DD',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 10,
        data: [this.getRandomInt(40, 60), this.getRandomInt(30, 50), this.getRandomInt(20, 40), this.getRandomInt(20, 30), this.getRandomInt(0, 20), this.getRandomInt(0, 10), this.getRandomInt(0, 20)]
      }
    ]
  });

  // getName() {
  //   var hashtags = ["#michaelbrown", "#policebrutality", "#blacklivesmatter", "#wrongfulkilling", "#handsupdontshoot", "#stoppoliceviolence", "#humanrights", "#mikebrown"];
  //   this.state.current = hashtags[this.getRandomInt(0,7)];
  //   // console.log(current);
  //   // return current;
  // }

  getInitialState() {
		return this.getState();
	}

	componentWillMount() {
		setInterval(() => {
			this.setState(this.getState());
		}, 2000);
    // setInterval(() => {
		// 	this.setState(this.getName());
		// }, 2000);
	}

  render () {
    const options = {
      title: {
        display: false,
        text: this.state.current,
        fontColor: "white",
        fontSize: 16,
        position: "top",
        textAlign: "right",
        fontFamily: "Proxima Nova",
        fontStyle: 100,
        letterSpacing: "2px"
      },
        legend: {display: false},
        maintainAspectRatio: false,
        responsive: true,
        layout: {padding: {bottom: 95, top: 10, left: 20, right: 40}, position: "chartArea", height: "300"},
        scales: {
          xAxes: [{
            gridLines: {color: "white", lineWidth: 0.25},
            ticks: {fontColor: "white", fontFamily: "Proxima Nova", backdropColor: "black"},
          }],
          yAxes: [{
            gridLines: {color: "white", lineWidth: 0.25},
            ticks: {fontColor: "white", fontFamily: "Proxima Nova", backdropColor: "black"},
          }],
        },
    }

    const grid = {
      color: "white"
    }

    return (
      <Line data={this.state} options={options} height={200}/>
    )
  }
}

export default Graph;

// const options = {
//     legend: {display: false},
//     scales: { xAxes: [{ display: false, }], yAxes: [{ display: false, }], },
//     maintainAspectRatio: false,
//     // elements: {arc: {borderColor: "black", borderWidth: "3"}},
//     // gridLines: {color: "white"}
//     scale: {
//       gridLines: {color: "#43F7DD"},
//       // ticks: {fontColor: "#43F7DD", fontFamily: "Proxima Nova", backdropColor: "black"},
//     },
//     layout: {padding: 1, position: "chartArea"}
// }
