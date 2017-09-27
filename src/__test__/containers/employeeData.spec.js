import React from 'react';
import { EmployeeData } from '../../app/containers/EmployeeData.jsx';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import createRouterContext from 'react-router-test-context';
import PropTypes from 'prop-types';

describe('EmployeeData', () => {

  it('should render if the employee object is passed', () => {

    const testEmployee = {
      id: 1,
      firstname: 'testName',
      lastname: 'testLastname',
      position: 'testPosition',
      role: 'testRole',
      experience: 'testExperience',
      shortdescript: 'testShortdescript',
      longdescript: 'testLongDescript'
    };

    const context = createRouterContext();
    EmployeeData.propTypes = {
      router: PropTypes.object
    };

    const wrapper = shallow(<EmployeeData employee={ testEmployee }/>, { context });

    expect(toJson(wrapper)).toMatchSnapshot();

  });

});
