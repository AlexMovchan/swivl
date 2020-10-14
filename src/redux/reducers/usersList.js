const SAVE_USERS_DATA = 'usersList/SAVE_USERS_DATA';
const SAVE_ONE_USER_DATA = 'usersList/SAVE_ONE_USER_DATA';

const initialState = {
  usersList: {},
  oneUserData: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_USERS_DATA: {
      const mergedUsersList = action.usersList
        .reduce((accum, newUser) => ({ ...accum, [newUser.id]: newUser }), state.usersList);

      return {
        ...state,
        usersList: mergedUsersList
      };
    }
    case SAVE_ONE_USER_DATA:
      return {
        ...state,
        oneUserData: action.oneUserData,
      };
    default:
      return state;
  }
}

export const saveUsersData = (usersList) => ({
  type: SAVE_USERS_DATA,
  usersList
});

export const saveOneUserData = (oneUserData) => ({
  type: SAVE_ONE_USER_DATA,
  oneUserData
});
