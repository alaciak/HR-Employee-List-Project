import fetch from 'isomorphic-fetch';
import thunk from 'redux-thunk';

export function getList() {

  const baseUrl = 'http://localhost:3000/employees';

  const fetchPromise = fetch(baseUrl).then(resp => resp.json()). then(data => {
    return data;
  });
  return {
    type: 'GET_LIST',
    payload: fetchPromise
  };
}

export function removeEmployee(employeeId) {

  const baseUrl = 'http://localhost:3000/employees';

  return dispatch => {
    return dispatch({
      type: 'REMOVE_EMPLOYEE',
      payload: fetch(baseUrl + '/' + employeeId, { method: 'DELETE' })
    }).then(() => dispatch(getList()));
  };
}
