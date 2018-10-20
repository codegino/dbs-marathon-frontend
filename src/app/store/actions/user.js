import axios from 'axios';
import {onLoadingStart, onLoadingEnd} from './ui';
import {history} from '../../../store';

export const REGISTER_USER = 'auth/REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'auth/REGISTER_SUCCESS';
export const REGISTER_USER_FAILED = 'auth/REGISTER_FAILED';
export const REVIEW_USER = 'auth/REVIEW/USER';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCESS';
export const LOGIN_FAILED = 'auth/LOGIN_FAILED';

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
    console.log(res.data)
    dispatch({type: LOGIN_SUCCESS, admin: res.data})
    history.push('/admin')
    dispatch(onLoadingEnd());
  } catch(e) {
    dispatch({type: LOGIN_FAILED})
    dispatch(onLoadingEnd());
    return Promise.reject('Invalid login')
  }
}

export const registerUser = ({email, mobile}) => async dispatch => {
  dispatch(onLoadingStart());
  try {
    const res = await axios.post('users', {
      email,
      mobile
    })
    console.log(res.data)
  } catch(e) {
    console.log(e.message)
    dispatch({type: REGISTER_USER_FAILED}) 
  }
  dispatch(onLoadingEnd());
}

export const fetchUser = ({queryString}) => async dispatch => {
  dispatch(onLoadingStart());
  try {
    const res = await axios.get('users', {
      params: {
        queryString
      }
    })

    console.log(res.data)
  } catch(e) {
    console.log(e)
    console.log(e.message)
    dispatch({type: REGISTER_USER_FAILED}) 
  }
  dispatch(onLoadingEnd());
}