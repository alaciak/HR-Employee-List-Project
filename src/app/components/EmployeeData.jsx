import React from 'react';

class EmployeeData extends React.Component {

  onClickHandler = e => {
    if(typeof this.props.onRemoveEmployee === 'function') {
      this.props.onRemoveEmployee(this.props.id);
    }
  }

  render() {
    return <tr id={ this.props.id } key={ this.props.id } className='employee-data'>
        <td>{ this.props.firstname } { this.props.lastname }</td>
        <td>{ this.props.role }</td>
        <td>{ this.props.experience } months</td>
        <td onClick={ this.onClickHandler }>X</td>
        <td className='employee-data employee-data_description'><div>{ this.props.shortdescript }</div></td>
      </tr>
  }
}

module.exports = EmployeeData;
