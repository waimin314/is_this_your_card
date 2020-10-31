import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Popup from './components/Popup';
import FlipMove from 'react-flip-move';

const TOTAL_CARDS = 24;
const TOTAL_COL = 3;
const CARDS_PER_COL = TOTAL_CARDS / TOTAL_COL;
const INSTUCTIONS = [
  'Pick a number and select its column',
  'Select its column again',
  'Is this your Number?',
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: this.getRandNumArray(),
      possibleNums: [],
      stage: 0,
      instruction: INSTUCTIONS[0],
    };
  }

  execute = (colNumber) => {
    if (this.state.stage >= 3) return;
    let tmp_nums = this.colToRows(colNumber);
    this.updatePossibleNums(
      tmp_nums.slice(CARDS_PER_COL * 1, CARDS_PER_COL * 2)
    );
    this.setInstruction();
    this.setState({ stage: this.state.stage + 1 });
  };

  setInstruction = () => {
    switch (this.state.stage + 1) {
      case 0:
        this.setState({ instruction: INSTUCTIONS[0] });
        break;
      case 1:
      case 2:
        this.setState({ instruction: INSTUCTIONS[1] });
        break;
      case 3:
        this.setState({ instruction: INSTUCTIONS[2] });
        break;
      default:
        console.log('Invalid stage ' + this.state.stage + 1);
    }
  };

  showPopup = () => {
    if (this.state.stage === 3) {
    }
  };

  colToRows = (colNumber) => {
    let newNumbers = [];
    for (let i = 0; i < TOTAL_COL; i++) {
      newNumbers.push(this.state.numbers[i]);
      for (let j = i + 3; j < TOTAL_CARDS; j += 3) {
        newNumbers.push(this.state.numbers[j]);
      }
    }

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
    this.setState({
      numbers: newNumbers,
    });

    return newNumbers;
  };

  updatePossibleNums = (selectedNums) => {
    let prvPosNums = this.state.possibleNums;
    let newPosNums = [];
    if (prvPosNums.length === 0) {
      newPosNums = selectedNums;
    } else {
      prvPosNums.forEach((n) => {
        if (selectedNums.includes(n)) newPosNums.push(n);
      });
    }
    this.setState({
      possibleNums: newPosNums,
    });
  };

  getRandNumArray = () => {
    let numArray = [];

    // Populate with TOTAL_CARDS numbers
    for (let i = 1; i <= TOTAL_CARDS; i++) numArray.push(i);

    return this.shuffle(numArray);
  };

  shuffle = (arr) => {
    //Shuffle;
    for (let j = arr.length - 1; j >= 0; j--) {
      let random = Math.floor(Math.random() * j);
      let tmp = arr[random];
      arr[random] = arr[j];
      arr[j] = tmp;
    }

    return arr;
  };

  renderGrid = () => {
    return this.state.numbers.map((num, i) => {
      return (
        <div key={num}>
          <Card number={num} />
        </div>
      );
    });
  };

  reset = () => {
    this.setState({
      numbers: this.getRandNumArray(),
      possibleNums: [],
      stage: 0,
      instruction: INSTUCTIONS[0],
    });
  };

  render() {
    return (
      <div>
        <div className='instruction'>{this.state.instruction}</div>
        <div className='main'>
          <Popup
            number={this.state.possibleNums}
            isVisible={this.state.stage === 3 ? true : false}
            restartHandler={this.reset}
          />

          <FlipMove
            easing='ease-in-out'
            duration={500}
            staggerDelayBy={20}
            className='grid-container'
          >
            {this.renderGrid()}
          </FlipMove>

          <div className='buttons-container'>
            <div className='button' onClick={() => this.execute(1)}>
              Select
            </div>
            <div className='button' onClick={() => this.execute(2)}>
              Select
            </div>
            <div className='button' onClick={() => this.execute(3)}>
              Select
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
