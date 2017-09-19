import React from 'react';
import EmployeeData from './EmployeeData.jsx';

class EmployeesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeList: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/employees').then(r => r.json()).then(data => {
      this.setState({
        employeeList: data,
        loading: false});
    }).catch(function(error) {
      console.log(error);
    });
  }

  onRemoveEmployee = employeeId => {
    let employeeList = this.state.employeeList.slice();
    let newEmployeeList = employeeList.filter((el) => el.id !== employeeId);
    const baseUrl = 'http://localhost:3000/employees'
    fetch(baseUrl + '/' + employeeId, { method : 'DELETE' }).then(r => r.json()).then(data => {
        this.setState({
          employeeList: newEmployeeList
        });
      }).catch(function(error) {
        console.log(error);
      });
    }

  render() {
    if (this.state.loading) {
      return null;
    } else {
      let employeeData = this.state.employeeList.map(employee => {
        return <EmployeeData id={employee.id} key={employee.id} firstname={employee.firstname} lastname={employee.lastname} role={employee.role} experience={employee.experience} shortdescript={employee.shortdescript} onRemoveEmployee={ this.onRemoveEmployee }/>
      });
      return (
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Role</th>
              <th>Experience</th>
            </tr>
          </thead>
          <tbody>
            {employeeData}
          </tbody>
        </table>
      )
    }
  }
}

module.exports = EmployeesList;
