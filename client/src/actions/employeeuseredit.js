import axios from 'axios';
import { setAlert } from './alert';

import {
  CREATE_USEROFEMPLOYEE,
  CREATE_USEROFEMPLOYEE_ERROR
 
} from './types';
const baseURL = 'http://localhost:5000';
// Get current users profile

// Create or update profile
export const createUserofEmployee = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post(baseURL+'/api/profile/createuserofemployee', formData, config);

    dispatch(setAlert('user created','primary'));
    dispatch({
             type:CREATE_USEROFEMPLOYEE,
             payload:res.data 
          });
          if (!edit) {
           // alert('dfdfdffd');
            history.push('/dashboard');
          }
  } catch (error) {
  // console.log('amamamamamamamamamaaaaaaaaaaaaaaa'+error);
    dispatch({
      type: CREATE_USEROFEMPLOYEE_ERROR,
      payload: { msg: 'in user creation ', status: '400' }
    });
  }
};


