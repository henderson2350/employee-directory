import React, { Component } from "react";
import axios from "axios";
import EmployeeList from "./EmployeeList.js";
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

//   searchEmployees() {
    //   getEmployees()
    //     .then(res => this.setState({ results: res.data.results}))
//   }

  
//   componentDidMount() {
//     axios
//       .get("https://randomuser.me/api/?results=30")
//       .then((response) => {
//           console.log(response.data.results)
//         this.setState({
//           employees: response.data.results,
//         });
//       })
//       .catch((err) => {
//         if (err) {
//           console.log(err);
//         }
//       });
//   }

  render() {
    return (
      <div>
        <div>Welcome to Employee Directory</div>
        <EmployeeList employees={this.state.filteredResults} />
      </div>
    );
  }
}

export default Container;
