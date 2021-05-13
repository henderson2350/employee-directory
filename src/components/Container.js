import React, { Component } from "react";
import axios from "axios";
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

  filterLastName() {
    this.state.results.prototype.filter()
  }


  render() {
    return (
      <div>
        <div>Welcome to Employee Directory</div>
        <SearchForm />
        <button onClick={this.filterLastName}>Sort by last name</button>
        <EmployeeList employees={this.state.filteredResults} />
      </div>
    );
  }
}

export default Container;
