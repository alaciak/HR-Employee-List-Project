import React from 'react';
import { I18n, Trans } from 'react-i18next';
import '../i18n';

export class LanguageSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonEnglish: '#e5a357',
      buttonPolish: '#fcfaf9'
    }
  }

  handleOnClickEnglish = (i18n) => {
    i18n.changeLanguage('en');
    if(this.state.buttonEnglish === '#fcfaf9') {
      this.setState({
        buttonEnglish: '#e5a357',
        buttonPolish: '#fcfaf9'
      });
    } else {
      this.setState({
        buttonEnglish: '#fcfaf9',
        buttonPolish: '#e5a357'
      });
    }
  }

  handleOnClickPolish = (i18n) => {
    i18n.changeLanguage('pl');
    if(this.state.buttonPolish === '#fcfaf9') {
      this.setState({
        buttonPolish: '#e5a357',
        buttonEnglish: '#fcfaf9'
      });
    } else {
      this.setState({
        buttonPolish: '#fcfaf9',
        buttonEnglish: '#e5a357'
      });
    }
  }

  render() {
    return (
      <I18n ns="translations">
        {(t, { i18n }) => (
          <div className='navigation-language col-3'>
            <button type='button' style={{ backgroundColor: this.state.buttonEnglish }} onClick={ () => this.handleOnClickEnglish(i18n) }>ENG</button>
            <button type='button' style={{ backgroundColor: this.state.buttonPolish }} onClick={ () => this.handleOnClickPolish(i18n) }>PL</button>
          </div>)}
      </I18n>
    );
  }
}
