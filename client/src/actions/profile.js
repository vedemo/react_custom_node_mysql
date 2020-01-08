import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
  GET_REPOS
} from './types';
const baseURL = 'http://localhost:5000';
// Get current users profile

export const getCurrentProfile = () => async dispatch => {
  

  try {
    const res = await axios.get(baseURL+'/api/profile/userdata');

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    console.log("------------------------");
    console.log(err)
    console.log("------------------------");
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: 'asas', status: '500' }
    });
  }
};


// Create or update profile
export const createProfile = (
  formData,
  history,
  edit = true
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.put('/api/profile/userdata', formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


