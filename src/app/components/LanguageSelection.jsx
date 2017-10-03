import React from 'react';
import { I18n, Trans } from 'react-i18next';
import '../i18n';

export class LanguageSelection extends React.Component {

  render() {
    return (
      <I18n ns="translations">
        {(t, { i18n }) => (
          <div className='navigation-language col-3'>
            <button type='button' onClick={() => i18n.changeLanguage('en')}>ENG</button>
            <button type='button' onClick={() => i18n.changeLanguage('pl')}>PL</button>
          </div>)}
      </I18n>
    );
  }
}
