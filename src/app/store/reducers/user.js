import {LOGIN_SUCCESS, REVIEW_USER} from '../actions/user'

const initialState = {
  admin: null,
  pendingUser: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        admin: action.admin
      };
    case REVIEW_USER:
      return {
        ...state,
        pendingUser: action.user
      };
    default:
      return state;
  }
};