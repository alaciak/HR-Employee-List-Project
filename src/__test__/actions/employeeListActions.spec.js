import { getList } from '../../app/actions/employeeListActions';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import promise from 'redux-promise-middleware';

describe('employeeListActions', () => {

  const middlewares = [promise()];
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

});
