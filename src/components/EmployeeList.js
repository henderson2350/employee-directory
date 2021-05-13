import React from 'react'

function EmployeeList(props) {
    console.log(props.employees[0].name.first)
    return (props.employees[0].name.first)
        // (<ul>
        // {props.employees.map(result => (
        //     <li key={result.id}>{result.name}</li>
        // ))}
        // </ul>
        // )
}

export default EmployeeList