import { getEmployee } from '../../app/actions/employeeEditFormActions';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import promise from 'redux-promise-middleware';

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

});
