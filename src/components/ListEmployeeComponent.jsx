import React, { useEffect, useState} from 'react'
import {listEmployees} from '../services/EmployeeService'

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(()=>
    {
        listEmployees().then((response)=>
        {
            setEmployees(response.data);
        }).catch(error=>{
            console.error(error);
        })
    }

    );
   /* const dummyData = [
        {
            "id":1,
            "firstName": "Ramu",
            "lastName": "Java1",
            "email":"ramu2115@gmail.com"
        },
        {
            "id":2,
            "firstName": "Ramu2",
            "lastName": "Java2",
            "email":"ramu2115@gmail.com"
        },
        {
            "id":3,
            "firstName": "Ramu3",
            "lastName": "Java3",
            "email":"ramu2115@gmail.com"
        }
        
    ]*/
  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee => 
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>)
                }   
            </tbody>
        </table>

    </div>
  )
}

export default ListEmployeeComponent