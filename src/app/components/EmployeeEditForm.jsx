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
      firstname:'',
      lastname:'',
      position: '',
      role: '',
      experience: '',
      shortdescript: '',
      longdescript:'',
      loading: true
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/employees/${this.props.match.params.id}`).then(r => r.json()).then(data => {
      this.setState({
        id: data.id,
        firstname: data.firstname,
        lastname: data.lastname,
        position: data.position,
        role: data.role,
        experience: data.experience,
        shortdescript: data.shortdescript,
        longdescript: data.longdescript,
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
      [name]: value,
    });
  }

  handleOnClickCancel  = e => {
    e.preventDefault();
    this.props.history.push('/');
  }

  handleonClickUpdate = e => {
    e.preventDefault();
    const updatedEmployee = {
      id: this.state.id,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      position: this.state.position,
      role: this.state.role,
      experience: this.state.experience,
      shortdescript: this.state.shortdescript,
      longdescript: this.state.longdescript,
    }
    fetch(`http://localhost:3000/employees/${this.props.match.params.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedEmployee),
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
    return <form action='' method='POST'>
      <label>First name:
        <input type='text' value={ this.state.firstname } placeholder={ this.state.firstname } disabled ></input>
      </label>
      <label>Last name:
        <input type='text' value={ this.state.lastname } placeholder={ this.state.lastname } disabled ></input>
      </label>
      <label>Role:
        <input type='text' value={ this.state.role } placeholder={ this.state.role }  disabled ></input>
      </label>
      <label>Position:
        <input type='text' value={ this.state.position } placeholder={ this.state.position } disabled ></input>
      </label>
      <label>Experience:
        <input type='text' value={ this.state.experience } placeholder={ this.state.experience } name='experience' onChange={ this.handleOnChange } ></input>
      </label>
      <label>Short description:
        <input type='text' value={ this.state.shortdescript } placeholder={ this.state.shortdescript } name='shortdescript' onChange={ this.handleOnChange } ></input>
      </label>
      <label>Long description:
        <input type='text' value={ this.state.longdescript } placeholder={ this.state.longdescript } name='longdescript' onChange={ this.handleOnChange } ></input>
      </label>
      <button type='button' onClick={ this.handleonClickUpdate }>SAVE</button>
      <button type='button' onClick={ this.handleOnClickCancel }>CANCEL</button>
    </form>
  }
}

module.exports = EmployeeEditForm;
