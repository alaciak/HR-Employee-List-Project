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
    this.props.history.push(`/edit/${this.props.id}`);
  }

  handleOnClickRemove = e => {
    e.stopPropagation();
    if(typeof this.props.onRemoveEmployee === 'function') {
      this.props.onRemoveEmployee(this.props.id);
    }
  }

  render() {
    return (
      <tr id={ this.props.id } key={ this.props.id } className='employee-data' onClick={ this.handleOnClickEdit }>
          <td>{ this.props.firstname } { this.props.lastname }</td>
          <td>{ this.props.role }</td>
          <td>{ this.props.experience } months</td>
          <td onClick={ this.handleOnClickRemove }>X</td>
          <td className='employee-data employee-data_description'><div>{ this.props.shortdescript }</div></td>
      </tr>
      );
    }
  }

module.exports = withRouter(EmployeeData);
