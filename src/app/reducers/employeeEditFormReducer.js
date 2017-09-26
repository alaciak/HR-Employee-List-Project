const employeeEditFormReducer = (state = {
  employee: {
    firstname:'',
    lastname:'',
    position: '',
    role: '',
    experience: '',
    shortdescript: '',
    longdescript:''
  }, loading: true
}, action) => {
  switch (action.type) {
    case "GET_EMPLOYEE_FULFILLED":
      state = {
        ...state,
        employee: action.payload,
        loading: false
      };
      break;
    case "UPDATE_EMPLOYEE_FULFILLED":
      state = {
        ...state,
        loading: false
      };
      break;
  }
  return state;
};

module.exports = employeeEditFormReducer;
