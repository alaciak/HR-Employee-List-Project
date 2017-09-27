import React from 'react';
import { Main } from '../../app/components/Main.jsx';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Main', () => {

  it('should render if Nav component with children (if they are passed)', () => {

    const wrapper = shallow(<Main />);

    expect(toJson(wrapper)).toMatchSnapshot();

  });

});
