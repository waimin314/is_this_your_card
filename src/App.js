import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";

class App extends Component {
  state = {
    numbers: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27
    ]
  };

  renderGrid = () => {
    return this.state.numbers.map(num => {
      return <Card number={num} />;
    });
  };

  render() {
    return <div>{this.renderGrid()}</div>;
  }
}

export default App;