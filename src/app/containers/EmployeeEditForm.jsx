import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEmployee, updateEmployee } from '../actions/employeeEditFormActions';
import { I18n, Trans } from 'react-i18next';

export class EmployeeEditForm extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      employee: {
        firstname: '',
        lastname: '',
        position: '',
        role: '',
        experience: '',
        shortdescript: '',
        longdescript: '',
      },
      formAlertDisplay: 'none',
      formExperienceAlertDisplay: 'none'
    }
  }

  componentDidMount() {
    this.props.getEmployee(this.props.match.params.id);
    if(this.props.userType === 'admin') {
      this.setState({
        disabled: false
      });
    } else {
      this.setState({
        disabled: true
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      employee: nextProps.employee
    });
    if(nextProps.userType === 'admin') {
      this.setState({
        disabled: false
      });
    } else {
      this.setState({
        disabled: true
      });
    }
  }

  handleOnChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      employee: {
        ...this.state.employee,
        [name]: value
      }
    });
  }

  handleOnClickCancel = e => {
    e.preventDefault();
    this.props.history.push('/');
  }

  handleOnClickUpdate = e => {
    e.preventDefault();
    if(!this.state.employee.role || !this.state.employee.position || !this.state.employee.experience || !this.state.employee.shortdescript || !this.state.employee.longdescript) {
      this.setState({
        formAlertDisplay: 'block'
      });
    } else if(isNaN(this.state.employee.experience)) {
      this.setState({
        formExperienceAlertDisplay: 'block'
      });
    } else {
      this.props.updateEmployee(this.state.employee, this.props.history);
    }
  }

  render() {
    return (
      <I18n ns="translations">
        {
          (t) => (
            <section className='employee-data-form container'>
              <div className='row'>
                <form action='' name='employee-data' className='employee-data-form_edit col-12'>
                  <fieldset>
                    <legend>{t('editForm.header')}</legend>
                    <label className='employee-data-form_edit-label'>{t('editForm.firstname')}:
                      <input type='text' value={ this.state.employee.firstname } placeholder={ this.state.employee.firstname } disabled></input>
                    </label>
                    <label className='employee-data-form_edit-label'>{t('editForm.lastname')}:
                      <input type='text' value={ this.state.employee.lastname } placeholder={ this.state.employee.lastname } disabled></input>
                    </label>
                    <label className='employee-data-form_edit-label'>{t('editForm.role')}:
                      <input type='text' value={ this.state.employee.role } placeholder={ this.state.employee.role } disabled={ this.state.disabled } name='role' onChange={ this.handleOnChange }></input>
                    </label>
                    <label className='employee-data-form_edit-label'>{t('editForm.position')}:
                      <input type='text' value={ this.state.employee.position } placeholder={ this.state.employee.position } disabled={ this.state.disabled } name='position' onChange={ this.handleOnChange }></input>
                    </label>
                    <label className='employee-data-form_edit-label'>{t('editForm.experience')}:
                      <input type='text' value={ this.state.employee.experience } placeholder={ this.state.employee.experience}  name='experience' onChange={ this.handleOnChange }></input>
                    </label>
                    <label className='employee-data-form_edit-label'>{t('editForm.shortdescript')}:
                      <textarea className='employee-data-form_edit-description' type='text' value={ this.state.employee.shortdescript } placeholder={ this.state.employee.shortdescript } name='shortdescript' onChange={this.handleOnChange}></textarea>
                    </label>
                    <label className='employee-data-form_edit-label'>{t('editForm.longdescript')}:
                      <textarea className='employee-data-form_edit-description' type='text' value={ this.state.employee.longdescript } placeholder={ this.state.employee.longdescript } name='longdescript' onChange={this.handleOnChange}></textarea>
                    </label>
                  </fieldset>
                </form>
                <div className='row employee-data-form_buttons'>
                  <button className='btn btn-save' type='button' onClick={ this.handleOnClickUpdate }>{t('editForm.saveButton')}</button>
                  <button className='btn btn-cancel' type='button' onClick={ this.handleOnClickCancel }>{t('editForm.cancelButton')}</button>
                </div>
              </div>
              <div className='row employee-data-form_alert-message' style={{ display: this.state.formAlertDisplay }}>{t('editForm.formAlert')}</div>
              <div className='row employee-data-form_alert-message' style={{ display: this.state.formExperienceAlertDisplay }}>{t('editForm.formExperienceAlert')}</div>
            </section>
          )
        }
      </I18n>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employee: state.employeeEditFormReducer.employee,
    userType: state.userTypeSelectionReducer.userType
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEmployee: (employeeId) => {
      dispatch(getEmployee(employeeId));
    },
    updateEmployee: (employee, history) => {
      dispatch(updateEmployee(employee, history));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EmployeeEditForm));
