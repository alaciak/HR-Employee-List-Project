export const employeeListReducer = (state = {
  employeeList: [],
  loading: true
}, action) => {
  switch (action.type) {
    case "GET_LIST_FULFILLED":
      state = {
        ...state,
        employeeList: action.payload,
        loading: false
      };
      break;
    case "REMOVE_EMPLOYEE_FULFILLED":
      state = {
        ...state,
        employeeList: state.employeeList.filter(el => el.id !== action.payload),
        loading: false
      };
      break;
  }
  return state;
};
