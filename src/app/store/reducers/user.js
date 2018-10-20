import {LOGIN_SUCCESS, REVIEW_USER, LOGIN_FAILED, GENERATE_REPORT_SUCCESS} from '../actions/user'

const initialState = {
  admin: null,
  pendingUser: null,
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        admin: action.admin
      };
    case LOGIN_FAILED:
      return {
        ...state,
        admin: null
      };
    case REVIEW_USER:
      return {
        ...state,
        pendingUser: action.user
      };
    case GENERATE_REPORT_SUCCESS:
      return {
        ...state,
        users: [...action.users]
      }
    default:
      return state;
  }
};