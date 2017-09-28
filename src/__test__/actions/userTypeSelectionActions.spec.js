import { selectUserType } from '../../app/actions/userTypeSelectionActions';

describe('userTypeSelectionActions', () => {

  const testUser = 'admin';

  it('should return USER_SELECTED action', () => {
    expect(selectUserType(testUser)).toEqual({
      type: 'USER_SELECTED',
      payload: testUser
    });
  });

});
