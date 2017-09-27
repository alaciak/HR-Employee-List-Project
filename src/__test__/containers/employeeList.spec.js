import React from 'react';
import { EmployeesList } from '../../app/containers/EmployeesList.jsx';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('EmployeesList', () => {

  it('should not render if the data are not fetched from the server', () => {

    const wrapper = shallow(
      <EmployeesList loading={ true }/>
    );

    expect(toJson(wrapper)).toMatchSnapshot();

  });

  it('should render if the data are fetched from the server', () => {

    const testEmployeeList = [{ id: 1, id: 2 }];

    const wrapper = shallow(
      <EmployeesList loading={ false } employeeList= { testEmployeeList }/>
    );

    expect(toJson(wrapper)).toMatchSnapshot();

  });

});
