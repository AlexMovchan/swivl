const SAVE_USERS_DATA = 'usersList/SAVE_USERS_DATA';

const initialState = {
  usersData: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_USERS_DATA:
      return {
        ...state,
        usersData: action.usersData,
      };
    default:
      return state;
  }
}

export const saveUsersData = (usersData) => ({
  type: SAVE_USERS_DATA,
  usersData
});
