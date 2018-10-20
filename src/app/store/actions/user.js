import axios from 'axios';
import { toast} from 'react-toastify';
import { onLoadingStart, onLoadingEnd } from './ui';
import { history, defaultStore } from '../../../store';

export const REGISTER_USER = 'auth/REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'auth/REGISTER_SUCCESS';
export const REGISTER_USER_FAILED = 'auth/REGISTER_FAILED';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCESS';
export const LOGIN_FAILED = 'auth/LOGIN_FAILED';

export const REVIEW_USER = 'user/REVIEW/USER';
export const GENERATE_REPORT_SUCCESS = 'user/GENERATE_REPORT_SUCCESS';
export const GENERATE_REPORT_FAILED = 'user/GENERATE_REPORT_FAILED';

export const reviewUser = (user) => async dispatch => {
  dispatch({type: REVIEW_USER, user}) 
  history.push('/review')
}

export const login = ({username, password}) => async dispatch => {
  dispatch(onLoadingStart());
  try {
    const res = await axios.post('login', {
      username,
      password 
    })
    dispatch({type: LOGIN_SUCCESS, admin: res.data})
    history.push('/admin')
    dispatch(onLoadingEnd());
    toast.success(`Successfully Login. Welcome ${res.data.username}!`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500
    });
  } catch(e) {
    dispatch({type: LOGIN_FAILED})
    dispatch(onLoadingEnd());
    
    toast.error('Invalid username or password!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000
    });
  }
}

export const registerUser = () => async dispatch => {
  try {
    dispatch(onLoadingStart());
    const {email, mobile, fullname, gender} = defaultStore.store.getState().user.pendingUser
    await axios.post('users', {
      email,
      mobile,
      fullname,
      gender
    })
    toast.success('Successfully registered.', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500
    });
    dispatch(onLoadingEnd());
    history.push('/')
  } catch(e) {
    toast.error('Something went wrong!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000
    });
    dispatch({type: REGISTER_USER_FAILED}) 
    dispatch(onLoadingEnd());
  }
}

export const fetchUser = ({queryString}) => async dispatch => {
  dispatch(onLoadingStart());
  try {
    await axios.get('users', {
      params: {
        queryString
      }
    })

    toast.success('Successfully fetch user.', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500
    });
  } catch(e) {
    toast.error('Something went wrong!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500
    });
  }
  dispatch(onLoadingEnd());
}

export const fetchUserReport = () => async dispatch => {
  dispatch(onLoadingStart());
  try {
    const res = await axios.get('users/report')

    dispatch({type: GENERATE_REPORT_SUCCESS, users: res.data}) 

    toast.success('Successfully fetch user.', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500
    });
  } catch(e) {
    dispatch({type: GENERATE_REPORT_FAILED}) 
  }
  dispatch(onLoadingEnd());
}