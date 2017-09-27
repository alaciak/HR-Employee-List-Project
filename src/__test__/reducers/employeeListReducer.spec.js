import { employeeListReducer } from '../../app/reducers/employeeListReducer';

describe('employeeListReducer', () => {

  const testEmployeeList = ['employee-1', 'employee-2', 'employee-3'];

  it('should return initial state', () => {
    expect(employeeListReducer(undefined, {})).toEqual({
      employeeList: [],
      loading: true
    });
  });

  it('should handle GET_EMPLOYEE_FULFILLED', () => {
    expect(employeeListReducer(undefined, {
      type: 'GET_LIST_FULFILLED',
      payload: testEmployeeList
    })).toEqual({
      employeeList: testEmployeeList,
      loading: false
    });
  });

  it('REMOVE_EMPLOYEE_FULFILLED', () => {
    expect(employeeListReducer(undefined, {
      type: 'REMOVE_EMPLOYEE_FULFILLED',
    })).toEqual({
      employeeList: [],
      loading: false
    });
  });

});
