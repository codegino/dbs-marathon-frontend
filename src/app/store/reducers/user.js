import {LOGIN_SUCCESS, REVIEW_USER, LOGIN_FAILED, GENERATE_REPORT_SUCCESS, FETCH_USER_SUCCESS, FETCH_USER_FAILED} from '../actions/user'

const initialState = {
  admin: null,
  currentUser: null,
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
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.user
      }
    case FETCH_USER_FAILED:
      return {
        ...state,
        currentUser: null
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