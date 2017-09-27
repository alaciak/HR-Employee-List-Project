import { employeeEditFormReducer } from '../../app/reducers/employeeEditFormReducer';

describe('employeeEditFormReducer', () => {

  const testEmployee = {
    firstname: 'testName',
    lastname: 'testLastname',
    position: 'testPosition',
    role: 'testRole',
    experience: 'testExperience',
    shortdescript: 'testShortdescript',
    longdescript: 'testLongDescript'
  };

  it('should return initial state', () => {
    expect(employeeEditFormReducer(undefined, {})).toEqual({
      employee: {
        firstname: '',
        lastname: '',
        position: '',
        role: '',
        experience: '',
        shortdescript: '',
        longdescript: ''
      },
      loading: true
    });
  });

  it('should handle GET_EMPLOYEE_FULFILLED', () => {
    expect(employeeEditFormReducer(undefined, {
      type: 'GET_EMPLOYEE_FULFILLED',
      payload: testEmployee
    })).toEqual({
      employee: testEmployee,
      loading: false
    });
  });

  it('UPDATE_EMPLOYEE_FULFILLED', () => {
    expect(employeeEditFormReducer(undefined, {
      type: 'UPDATE_EMPLOYEE_FULFILLED',
    })).toEqual({
      employee: {
        firstname: '',
        lastname: '',
        position: '',
        role: '',
        experience: '',
        shortdescript: '',
        longdescript: ''
      },
      loading: false
    });
  });

});
