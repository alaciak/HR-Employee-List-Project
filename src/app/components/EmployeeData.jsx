import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


class EmployeeData extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

  }

  handleOnClickEdit  = e => {
    e.stopPropagation();
    this.props.history.push(`/edit/${this.props.employee.id}`);
  }

  handleOnClickRemove = e => {
    e.stopPropagation();
    if(typeof this.props.onRemoveEmployee === 'function') {
      this.props.onRemoveEmployee(this.props.employee.id);
    }
  }

  render() {
    return (
      <tr id={ this.props.employee.id } key={ this.props.employee.id } className='employee-data' onClick={ this.handleOnClickEdit }>
        <td>{ this.props.employee.firstname } { this.props.employee.lastname }</td>
        <td>{ this.props.employee.role }</td>
        <td>{ this.props.employee.experience } month(s)</td>
        <td className='employee-data_remove'>
          <div onClick={ this.handleOnClickRemove }>X</div>
          <div className='employee-data employee-data_description'>{ this.props.employee.shortdescript }</div>
        </td>
      </tr>
      );
    }
  }

module.exports = withRouter(EmployeeData);
