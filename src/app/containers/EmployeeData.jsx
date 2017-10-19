import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeEmployee } from '../actions/employeeListActions';
import { translate } from 'react-i18next';
import AlertContainer from 'react-alert';

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
      this.props.handleOnClickErrorAlert();
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
      this.props.handleOnRemoveSuccessAlert();
    }
  }

  render() {
    const { t } = this.props;
    return (
      <tr id={ this.props.employee.id } key={ this.props.employee.id } className='employee-data' onClick={ this.handleOnClickEdit }>
        <td>{ this.props.employee.firstname } { this.props.employee.lastname }</td>
        <td>{ this.props.employee.role }</td>
        <td>{ this.props.employee.experience } {t('employeeList.experienceData')}</td>
        <td className='employee-data_remove'>
          <div onClick={ this.handleOnClickRemove }>X</div>
          <div className='employee-data employee-data_description'>{ this.props.employee.shortdescript }</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(translate('translations')(EmployeeData)));
