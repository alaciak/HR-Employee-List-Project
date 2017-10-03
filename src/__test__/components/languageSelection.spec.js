import React from 'react';
import { LanguageSelection } from '../../app/components/LanguageSelection.jsx';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import i18n from '../i18nForTests';


describe('LanguageSelection', () => {

  it('should render LanguageSelection component', () => {

    const wrapper = shallow(<LanguageSelection />);

    expect(toJson(wrapper)).toMatchSnapshot();

  });

});
