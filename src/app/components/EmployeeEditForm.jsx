import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEmployee, updateEmployee } from '../actions/employeeEditFormActions';

class EmployeeEditForm extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      employee: {
        firstname:'',
        lastname:'',
        position: '',
        role: '',
        experience: '',
        shortdescript: '',
        longdescript:''
      }
    }
  }

  componentDidMount() {
    this.props.getEmployee(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      employee: nextProps.employee
    });
  }

  handleOnChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      employee : {
        ...this.props.employee,
        [name]: value
      }
    });
  }

  handleOnClickCancel  = e => {
    e.preventDefault();
    this.props.history.push('/');
  }

  handleOnClickUpdate = e => {
    e.preventDefault();
    this.props.updateEmployee(this.state.employee, this.props.match.params.id, this.props.history);
  }

  render() {
    return (
      <section className='employee-data-form container'>
        <div className='row'>
          <form action='' name='employee-data' className='employee-data-form_edit col-12'>
            <fieldset>
              <legend>Employee Data</legend>
              <label className='employee-data-form_edit-label'>First name:
                <input type='text' value={ this.state.employee.firstname } placeholder={ this.state.employee.firstname } disabled ></input>
              </label>
              <label className='employee-data-form_edit-label'>Last name:
                <input type='text' value={ this.state.employee.lastname } placeholder={ this.state.employee.lastname } disabled ></input>
              </label>
              <label className='employee-data-form_edit-label'>Role:
                <input type='text' value={ this.state.employee.role } placeholder={ this.state.employee.role }  disabled ></input>
              </label>
              <label className='employee-data-form_edit-label'>Position:
                <input type='text' value={ this.state.employee.position } placeholder={ this.state.employee.position } disabled ></input>
              </label>
              <label className='employee-data-form_edit-label'>Experience (months):
                <input type='text' value={ this.state.employee.experience } placeholder={ this.state.employee.experience } name='experience' onChange={ this.handleOnChange } ></input>
              </label>
              <label className='employee-data-form_edit-label'>Short description:
                <textarea className='employee-data-form_edit-description' type='text' value={ this.state.employee.shortdescript } placeholder={ this.state.employee.shortdescript } name='shortdescript' onChange={ this.handleOnChange } ></textarea>
              </label>
              <label className='employee-data-form_edit-label'>Long description:
                <textarea className='employee-data-form_edit-description' type='text' value={ this.state.employee.longdescript } placeholder={ this.state.employee.longdescript } name='longdescript' onChange={ this.handleOnChange } ></textarea>
              </label>
            </fieldset>
          </form>
          <div className='row employee-data-form_buttons'>
            <button className='btn btn-save' type='button' onClick={ this.handleOnClickUpdate }>SAVE</button>
            <button className='btn btn-cancel'type='button' onClick={ this.handleOnClickCancel }>CANCEL</button>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employee: state.employeeEditFormReducer.employee,
    loading: state.employeeEditFormReducer.loading
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      getEmployee: (employeeId) => {
          dispatch(getEmployee(employeeId));
        },
      updateEmployee: (employee, employeeId, history) => {
          dispatch(updateEmployee(employee, employeeId, history));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EmployeeEditForm));
