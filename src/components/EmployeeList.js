import React from "react";
// import Container from 'Container'

function EmployeeList(props) {
    console.log(props.employees)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>Username</th>
            <th>Email</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.length &&
            props.employees.map((employee) => {
              return (
                <tr>
                  <td>{employee.name.first}</td>
                  <td>{employee.name.last}</td>
                  <td>{employee.login.username}</td>
                  <td>{employee.email}</td>
                  <td>{employee.location.country}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
