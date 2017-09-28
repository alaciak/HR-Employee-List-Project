import React from 'react'
import { connect } from 'react-redux';
import { selectUserType } from '../actions/userTypeSelectionActions';

export class UserTypeSelection extends React.Component {

  handleOnChangeOption = e => {
    this.props.selectUserType(e.target.value);
  }

  render() {
    return (
      <select className='navigation-user_select' name='loggedIn' value={ this.props.userType } onChange={ this.handleOnChangeOption }>
        <option value='user'>User</option>
        <option value='admin'>Admin</option>
      </select>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userType: state.userTypeSelectionReducer.userType
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectUserType: (userSelected) => {
      dispatch(selectUserType(userSelected));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTypeSelection);
