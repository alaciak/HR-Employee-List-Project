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
        loading: false
      });
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
      const employeeData = this.state.employeeList.map(employee => {
        return <EmployeeData key={ employee.id } id={ employee.id } employee={ employee } onRemoveEmployee={ this.onRemoveEmployee }/>
      });
      return (
        <section className='employee-list'>
          <div className='row'>
            <div className='container'>
              <table className='employee-list_table col-12'>
                <caption>Employee List</caption>
                <thead className='employee-list_table-heading'>
                  <tr>
                    <th>Full Name</th>
                    <th>Role</th>
                    <th>Experience</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className='employee-list_table-body'>
                  {employeeData}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )
    }
  }
}

module.exports = EmployeesList;
