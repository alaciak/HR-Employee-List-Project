import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeEmployee } from '../actions/employeeListActions';

export class EmployeeData extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      alertMessageDispaly: 'none'
    }
  }

  onClickValidate () {
    if (this.props.userType === 'user' && (this.props.employee.position === 'Manager' || this.props.employee.position === 'Admin')) {
      this.setState({
        alertMessageDispaly: 'block',
        timeoutId: setTimeout(() => {
          this.setState({
            alertMessageDispaly: 'none'
          });
        }, 2000)
      });
      return false;
    }
    return true;
  }

  handleOnClickEdit = e => {
    e.stopPropagation();
    if(this.onClickValidate()) {
      this.props.history.push(`/edit/${this.props.employee.id}`);
    }
  }

  handleOnClickRemove = e => {
    e.stopPropagation();
    if(this.onClickValidate()) {
      this.props.removeEmployee(this.props.employee.id);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeoutId);
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
          <div className='employee-data employee-data_allert-message' style={{ display: this.state.alertMessageDispaly }}><div className='employee-data_allert-message_image'></div><p>Only administrator can remove or edit this employee</p></div>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userType: state.userTypeSelectionReducer.userType
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeEmployee: (employeeID) => {
      dispatch(removeEmployee(employeeID));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EmployeeData));
