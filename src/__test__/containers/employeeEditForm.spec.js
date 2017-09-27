import React from 'react';
import { EmployeeEditForm } from '../../app/containers/EmployeeEditForm.jsx';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import createRouterContext from 'react-router-test-context';

describe('EmployeeEditForm', () => {

  it('should render if the data are fetched from the server', () => {

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
    EmployeeEditForm.propTypes = {
      router: React.PropTypes.object
    };

    const wrapper = render(
        <EmployeeEditForm loading={ false } employee={ testEmployee }/>,
        { context }
    );

    expect(toJson(wrapper)).toMatchSnapshot();

  });

});
