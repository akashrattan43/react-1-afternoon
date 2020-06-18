import React, { Component } from 'react';

export default class FilterObject extends Component {

constructor() {
    super();

    this.state = {
    employees: [
        {
        name: 'lopso',
        title: 'something',
        age: 14,
        },
        {
        name: 'robert',
        age: 123,
        },
        {
        name: 'kolo',
        title: 'employee',
        }
    ],

    userInput: '',
    filteredEmployees: []
    }
}

handleChange(value) {
    this.setState({ userInput: value });
}

filterEmployees(kol) {
    let employees = this.state.employees;
    let filteredEmployees = [];

    for ( let i = 0; i < employees.length; i++ ) {
    if ( employees[i].hasOwnProperty(kol) ) {
        filteredEmployees.push(employees[i]);
    }
    }

    this.setState({ filteredEmployees: filteredEmployees });
}

render() {
    return (
    <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
        <input className="inputLine" onChange={ (cha) => this.handleChange(cha.target.value) }/>
        <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
    </div>
    )
}
}