export const userTypeSelectionReducer = (state = {
  userType: 'user'
}, action) => {
  switch (action.type) {
    case "USER_SELECTED":
      state = {
        ...state,
        userType: action.payload
      };
      break;
  }
  return state;
};
