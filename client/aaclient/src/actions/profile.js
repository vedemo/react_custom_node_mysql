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
   console.log('sdsds');

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

