import React from 'react';
import { EmployeeData } from '../../app/containers/EmployeeData.jsx';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import createRouterContext from 'react-router-test-context';

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
      router: React.PropTypes.object
    };

    const wrapper = shallow(<EmployeeData employee={ testEmployee }/>, { context });

    expect(toJson(wrapper)).toMatchSnapshot();

  });

});
