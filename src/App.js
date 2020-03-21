import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";

const TOTAL_CARDS = 27;
const TOTAL_COL = 3;
const CARDS_PER_COL = TOTAL_CARDS / TOTAL_COL;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: this.getRandNumArray(),
      possibleNums: []
    };
  }

  colToRows = colNumber => {
    let newNumbers = [];
    for (let i = 0; i < TOTAL_COL; i++) {
      newNumbers.push(this.state.numbers[i]);
      for (let j = i + 3; j < TOTAL_CARDS; j += 3) {
        newNumbers.push(this.state.numbers[j]);
      }
    }
    console.log(newNumbers);

    let col_1 = newNumbers.slice(CARDS_PER_COL * 0, CARDS_PER_COL); // 1 to 9
    let col_2 = newNumbers.slice(CARDS_PER_COL * 1, CARDS_PER_COL * 2); // 10 to 18
    let col_3 = newNumbers.slice(CARDS_PER_COL * 2, CARDS_PER_COL * 3); // 19 to 27

    switch (colNumber) {
      case 1:
        newNumbers = [...col_2, ...col_1, ...col_3];
        break;

      case 2:
        newNumbers = [...col_1, ...col_2, ...col_3];
        break;

      case 3:
        newNumbers = [...col_2, ...col_3, ...col_1];
        break;

      default:
        break;
    }

    let prvPosNums = this.state.possibleNums;
    let curPosNums = newNumbers.slice(CARDS_PER_COL * 1, CARDS_PER_COL * 2);
    let newPosNums = [];
    if (prvPosNums.length === 0) {
      newPosNums = curPosNums;
    } else {
      prvPosNums.forEach(n => {
        if (curPosNums.includes(n)) newPosNums.push(n);
      });
    }
    this.setState(
      {
        numbers: newNumbers,
        possibleNums: newPosNums
      },
      () => {
        console.log(this.state.possibleNums);
      }
    );
  };

  getRandNumArray = () => {
    let numArray = [];

    // Populate with TOTAL_CARDS numbers
    for (let i = 1; i <= TOTAL_CARDS; i++) numArray.push(i);

    //Shuffle
    // for (let j = TOTAL_CARDS - 1; j >= 0; j--) {
    //   let random = Math.floor(Math.random() * j);
    //   let tmp = numArray[random];
    //   numArray[random] = numArray[j];
    //   numArray[j] = tmp;
    // }
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
          <div className="button" onClick={() => this.colToRows(1)}>
            Select
          </div>
          <div className="button" onClick={() => this.colToRows(2)}>
            Select
          </div>
          <div className="button" onClick={() => this.colToRows(3)}>
            Select
          </div>
        </div>
      </div>
    );
  }
}

export default App;
