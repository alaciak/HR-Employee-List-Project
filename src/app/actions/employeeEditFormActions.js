import fetch from 'isomorphic-fetch';
import thunk from 'redux-thunk';

export function getEmployee(employeeId) {

  const baseUrl = 'http://localhost:3000/employees/';

  const fetchPromise = fetch(baseUrl + employeeId).then(resp => resp.json()).then(data => {
    return data;
  });
  return {
    type: 'GET_EMPLOYEE',
    payload: fetchPromise
  };
}

export function updateEmployee(employee, employeeId, history) {

  const baseUrl = 'http://localhost:3000/employees/';

  return dispatch => {
    return dispatch({
      type: 'UPDATE_EMPLOYEE',
      payload: fetch(baseUrl + employeeId, {
        method: 'PUT',
        body: JSON.stringify(employee),
        headers: {
          "Content-Type": "application/json"
        }
      })
    }).then(() => history.push('/'));
  };
}
