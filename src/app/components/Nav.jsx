import React from 'react';
import UserTypeSelection from '../containers/UserTypeSelection.jsx';
import { LanguageSelection } from './LanguageSelection.jsx';
import { Provider } from 'react-redux';
import store from '../Store.jsx';
import { translate } from 'react-i18next';

export class Nav extends React.Component {

  render() {
    const { t } = this.props;
    return (
      <header className='navigation'>
        <nav className='container'>
          <div className='row'>
            <div className='navigation-logo col-4'>HR <span>System </span>Management</div>
              <LanguageSelection />
              <div className='navigation-user col-6'>
                <p>{t('loggedUser')}:</p>
                <Provider store={ store }>
                  <UserTypeSelection />
                </Provider>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default (translate('translations')(Nav));
