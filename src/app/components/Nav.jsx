import React from 'react';
import UserTypeSelection from '../containers/UserTypeSelection.jsx';
import { LanguageSelection } from './LanguageSelection.jsx';
import { Provider } from 'react-redux';
import store from '../Store.jsx';
import { I18n, Trans } from 'react-i18next';

export class Nav extends React.Component {

  render() {
    return (
      <I18n ns="translations">
        {
          (t) => (
            <header className='navigation'>
              <nav className='container'>
                <div className='row'>
                  <div className='navigation-logo col-6'>HR <span>System</span> Management</div>
                    <LanguageSelection />
                    <div className='navigation-user col-3'>
                      <p>{t('loggedUser')}:</p>
                      <Provider store={ store }>
                        <UserTypeSelection />
                      </Provider>
                  </div>
                </div>
              </nav>
            </header>
          )
        }
      </I18n>
    );
  }
}
