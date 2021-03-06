import React from 'react';
import { EmployeeEditForm } from '../../app/containers/EmployeeEditForm.jsx';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import createRouterContext from 'react-router-test-context';
import PropTypes from 'prop-types';


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
      router: PropTypes.object
    };

    const wrapper = render(
        <EmployeeEditForm employee={ testEmployee } t={ key => key }/>,
        { context }
    );

    expect(toJson(wrapper)).toMatchSnapshot();

  });

});
