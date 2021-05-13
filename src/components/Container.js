import  React, { Component } from 'react';
import axios from 'axios'
import EmployeeList from './EmployeeList.js'

class Container extends Component {

    state = {
        search: "",
        results: [],
        employees: []
    }

    componentDidMount() {
        axios
        .get("https://randomuser.me/api/?results=30")
    .then(response => {
        this.setState({employees: response.data.results,
        employeesToShow: response.data.results})
    }).catch(err => {
        if(err){
            console.log(err)
        }})
    }

    render() {
        return (
            <div>
                <div>Welcome to Employee Directory</div>
                <EmployeeList employees={this.state.employees}/> 
            </div>

        )
    }
}

export default Container