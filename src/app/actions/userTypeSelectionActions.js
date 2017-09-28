export function selectUserType(userSelected) {
  return {
    type: 'USER_SELECTED',
    payload: userSelected
  };
}
