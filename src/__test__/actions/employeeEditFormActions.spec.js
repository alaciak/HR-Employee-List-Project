import { getEmployee, updateEmployee } from '../../app/actions/employeeEditFormActions';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

describe('employeeEditFormActions', () => {

  const middlewares = [promise()];
  const mockStore = configureMockStore(middlewares);

  it('should dispatch GET_EMPLOYEE_PENDING and GET_EMPLOYEE_FULFILLED when fetching data', () => {
    nock('http://localhost:3000/')
      .get('/employees/1')
      .reply(200, { body: []});

    const expectedActions = ['GET_EMPLOYEE_PENDING', 'GET_EMPLOYEE_FULFILLED'];
    const store = mockStore({employee: {}});

    store.dispatch(getEmployee('1')).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions.map(action => action.type)).toEqual(expectedActions);
    });

  });

  it('should dispatch UPDATE_EMPLOYEE_PENDING and UPDATE_EMPLOYEE_FULFILLED when fetching data', () => {
    nock('http://localhost:3000/')
      .put('/employees/1')
      .reply(200, { body: []});

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

    const middlewares = [promise(), thunk];
    const expectedActions = ['UPDATE_EMPLOYEE_PENDING', 'UPDATE_EMPLOYEE_FULFILLED'];
    const store = mockStore(middlewares);
    const history = { push: (path) => { history.pushedPath = path; }};

    store.dispatch(updateEmployee(testEmployee, history)).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions.map(action => action.type)).toEqual(expectedActions);
      expect(history.pushedPath = '/');
    });
  });

});
