import React from 'react';
import { Nav } from '../../app/components/Nav.jsx';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Nav', () => {

  it('should render header and nav of the page', () => {

    const wrapper = shallow(<Nav t={ key => key }/>);

    expect(toJson(wrapper)).toMatchSnapshot();

  });

});
