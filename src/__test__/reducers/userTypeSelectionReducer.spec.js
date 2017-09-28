import { userTypeSelectionReducer } from '../../app/reducers/userTypeSelectionReducer';

describe('userTypeSelectionReducer', () => {

  const testUser = 'admin';

  it('should return initial state', () => {
    expect(userTypeSelectionReducer(undefined, {})).toEqual({
      userType: 'user',
    });
  });

  it('should handle USER_SELECTED', () => {
    expect(userTypeSelectionReducer(undefined, {
      type: 'USER_SELECTED',
      payload: testUser
    })).toEqual({
      userType: testUser
    });
  });

});
