import React from 'react';
import { Main } from '../../app/components/Main.jsx';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Main', () => {

  it('should render Nav component', () => {

    const wrapper = shallow(<Main />);

    expect(toJson(wrapper)).toMatchSnapshot();

  });

});
