import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLoggedIn: 'User'
    }
  }

  handleOnChangeOption = e => {
    this.setState({
      selectedLoggedIn: e.target.value
    });
  }

  render() {
    return (
      <header className='navigation'>
        <nav className='container'>
          <div className='row'>
            <div className='navigation-logo col-6'>HR <span>System</span> Management</div>
            <div className='col-6'>
              <div className='navigation-user'>Logged as:
                <select className='navigation-user_select' name='loggedIn' value={this.state.userLoggedIn} onChange={this.handleOnChangeOption}>
                  <option value='user'>User</option>
                  <option value='admin'>Admin</option>
                </select>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

module.exports = Nav;
