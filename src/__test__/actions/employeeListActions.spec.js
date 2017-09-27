import { getList, removeEmployee } from '../../app/actions/employeeListActions';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

describe('employeeListActions', () => {

  const middlewares = [promise(), thunk];
  const mockStore = configureMockStore(middlewares);

  it('should dispatch GET_LIST_PENDING and GET_LIST_FULFILLED when fetching data', () => {
    nock('http://localhost:3000/')
      .get('/employees')
      .reply(200, { body: []});

    const expectedActions = ['GET_LIST_PENDING', 'GET_LIST_FULFILLED'];
    const store = mockStore({employeeList: []});

    store.dispatch(getList()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions.map(action => action.type)).toEqual(expectedActions);
    });
  });

  it('should dispatch REMOVE_EMPLOYEE_PENDING and REMOVE_EMPLOYEE_FULFILLED when fetching data', () => {
    nock('http://localhost:3000/')
      .delete('/employees/1')
      .reply(200, { body: []});
    nock('http://localhost:3000/')
      .get('/employees')
      .reply(200, { body: []});

    const expectedActions = ['REMOVE_EMPLOYEE_PENDING', 'REMOVE_EMPLOYEE_FULFILLED', 'GET_LIST_PENDING', 'GET_LIST_FULFILLED'];
    const store = mockStore({});

    store.dispatch(removeEmployee('1')).then().then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions.map(action => action.type)).toEqual(expectedActions);
    });
  });

});
