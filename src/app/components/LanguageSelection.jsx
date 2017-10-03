import React from 'react';
import { translate} from 'react-i18next';
import '../i18n';

export class LanguageSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'en'
    }
  }

  handleOnClick = (i18n, language) => {
    i18n.changeLanguage(language);
    this.setState({
      selectedLanguage: language
    });
  }

  render() {
    const selectedEnglish = (this.state.selectedLanguage === 'en')? '#e5a357' : '#fcfaf9';
    const selectedPolish = (this.state.selectedLanguage === 'pl')? '#e5a357' : '#fcfaf9';
    return (
      <div className='navigation-language col-2'>
        <button type='button' style={{ color: selectedEnglish }} onClick={ () => this.handleOnClick(this.props.i18n, 'en') }>ENG</button>
        <button type='button' style={{ color: selectedPolish }} onClick={ () => this.handleOnClick(this.props.i18n, 'pl') }>PL</button>
      </div>
    );
  }
}

export default (translate('translations')(LanguageSelection));
