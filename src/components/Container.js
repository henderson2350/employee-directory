import React, { Component } from "react";
import EmployeeList from "./EmployeeList.js";
import SearchForm from './SearchForm.js'
import getEmployees from '../utils/API'

class Container extends Component {
  state = {
    search: "",
    results: [],
    filteredResults: []
  };

  componentDidMount() {
    getEmployees()
    .then(res => this.setState({ results: res.data.results, filteredResults: res.data.results}))
  }

  filterLastName = () => {
    const sortedEmployees = this.state.results.sort((a, b) => {
      return a.name.last > b.name.last ? 1 : -1
    });

    this.setState({filteredResults: sortedEmployees})
  }

  handleSearch = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });

    const filteredEmployees = this.state.results.filter(function (employee) {
      return employee.name.last.toLowerCase().includes(event.target.value)
    })

    this.setState({filteredResults: filteredEmployees})

    console.log(filteredEmployees)
    
  };

  render() {
    return (
      <div>
        <div>Welcome to Employee Directory</div>
        <p>Your search is {this.state.search}</p>
        <SearchForm handleSearch={this.handleSearch}/>
        <button onClick={this.filterLastName}>Sort by last name</button>
        <EmployeeList employees={this.state.filteredResults} />
      </div>
    );
  }
}

export default Container;
