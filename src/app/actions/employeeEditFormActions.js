import fetch from 'isomorphic-fetch';
import thunk from 'redux-thunk';

const baseUrl = 'http://localhost:3000/employees/';

export function getEmployee(employeeId) {

  const fetchPromise = fetch(baseUrl + employeeId).then(resp => resp.json()).then(data => {
    return data;
  });
  return {
    type: 'GET_EMPLOYEE',
    payload: fetchPromise
  };
}

export function updateEmployee(employee, history) {

  return {
      type: 'UPDATE_EMPLOYEE',
      payload: fetch(baseUrl + employee.id, {
        method: 'PUT',
        body: JSON.stringify(employee),
        headers: {
          "Content-Type": "application/json"
        }
    }).then(() => history.push('/'))
  };
}
