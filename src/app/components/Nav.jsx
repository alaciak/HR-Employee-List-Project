import React from 'react';
import UserTypeSelection from '../containers/UserTypeSelection.jsx';
import { Provider } from 'react-redux';
import store from '../Store.jsx';

export class Nav extends React.Component {

  render() {
    return (
      <header className='navigation'>
        <nav className='container'>
          <div className='row'>
            <div className='navigation-logo col-6'>HR <span>System</span> Management</div>
            <div className='col-6'>
              <div className='navigation-user'>Logged as:
                <Provider store={ store }>
                  <UserTypeSelection />
                </Provider>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
