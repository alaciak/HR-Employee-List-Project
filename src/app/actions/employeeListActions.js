import fetch from 'isomorphic-fetch';

const baseUrl = 'http://localhost:3000/employees';

export function getList() {

  const fetchPromise = fetch(baseUrl).then(resp => resp.json()). then(data => {
    return data;
  });
  return {
    type: 'GET_LIST',
    payload: fetchPromise
  };
}

export function removeEmployee(employeeId) {

  return dispatch => {
    return dispatch({
      type: 'REMOVE_EMPLOYEE',
      payload: fetch(baseUrl + '/' + employeeId, { method: 'DELETE' })
    }).then(() => dispatch(getList()));
  };
}
