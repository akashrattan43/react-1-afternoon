import React, { Component } from 'react';

export default class Sum extends Component {

constructor() {
    super();

    this.state = {
    number1: 0,
    number2: 0,
    sum: null
    }
}

updateNumber1(val) {
    this.setState({ number1: parseInt(val, 10) });
}

updateNumber2(value) {
    this.setState({ number2: parseInt(value, 10) });
}

add(num1, num2) {
    this.setState({ sum: num1 + num2 });
}

render() {
    return (
    <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" type="number" onChange={ (cha) => this.updateNumber1(cha.target.value) }/>
        <input className="inputLine" type="number" onChange={ (cha) => this.updateNumber2(cha.target.value) }/>
        <button className="confirmationButton" onClick={ () => this.add(this.state.number1, this.state.number2) }> Add </button>
        <span className="resultsBox"> Sum: {this.state.sum} </span>
    </div>
    )
}
}

