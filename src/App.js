import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";

const TOTAL_CARDS = 27;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: this.getRandNumArray()
    };
  }

  getRandNumArray = () => {
    let numArray = [];

    // Populate with TOTAL_CARDS numbers
    for (let i = 1; i <= TOTAL_CARDS; i++) numArray.push(i);

    //Shuffle
    for (let j = TOTAL_CARDS - 1; j >= 0; j--) {
      let random = Math.floor(Math.random() * j);
      let tmp = numArray[random];
      numArray[random] = numArray[j];
      numArray[j] = tmp;
    }
    return numArray;
  };

  renderGrid = () => {
    return this.state.numbers.map((num, i) => {
      return <Card key={i} number={num} />;
    });
  };

  render() {
    return (
      <div className="main">
        <div className="grid-container">{this.renderGrid()}</div>
        <div className="buttons-container">
          <div className="button">Select</div>
          <div className="button">Select</div>
          <div className="button">Select</div>
        </div>
      </div>
    );
  }
}

export default App;
