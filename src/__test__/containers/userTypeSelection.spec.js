import React from 'react';
import { UserTypeSelection } from '../../app/containers/UserTypeSelection.jsx';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('UserTypeSelection', () => {

    const testUser = 'admin';

    it('should render if the userType is passed', () => {

    const wrapper = shallow(<UserTypeSelection userType={ testUser }/>);

    expect(toJson(wrapper)).toMatchSnapshot();

  });

});
