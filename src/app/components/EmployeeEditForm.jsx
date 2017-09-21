import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

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
      },
      loading: true
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/employees/${this.props.match.params.id}`).then(r => r.json()).then(data => {
      this.setState({
        employee: data,
        loading: false
      });
    }).catch(function(error) {
      console.log(error);
    });
  }

  handleOnChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      employee : {
        ...this.state.employee,
        [name]: value
      }
    });
  }

  handleOnClickCancel  = e => {
    e.preventDefault();
    this.props.history.push('/');
  }

  handleonClickUpdate = e => {
    e.preventDefault();
    fetch(`http://localhost:3000/employees/${this.props.match.params.id}`, {
      method: 'PUT',
      body: JSON.stringify(this.state.employee),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(data => {
      this.props.history.push('/');
    }).catch(function(error) {
      console.log(error);
    });
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
            <button className='btn btn-save' type='button' onClick={ this.handleonClickUpdate }>SAVE</button>
            <button className='btn btn-cancel'type='button' onClick={ this.handleOnClickCancel }>CANCEL</button>
          </div>
        </div>
      </section>
    );
  }
}

module.exports = EmployeeEditForm;
