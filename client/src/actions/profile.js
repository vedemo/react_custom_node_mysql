import axios from 'axios';
import { setAlert } from './alert';
import setAuthToken  from '../utils/setAuthToken';
import {
  GET_PROFILE,
  PROFILE_ERROR,
  GET_USEROFEMPLOYEE,
  USEROFEMPLOYEE_ERROR
 
} from './types';
const baseURL = 'http://localhost:5000';
// Get current users profile

export const getCurrentProfile = () => async dispatch => {
  if(localStorage.token){
    setAuthToken(localStorage.token);
}

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
}

//user of employee
export const loadUserofemployee= ()=> async dispatch=>{
  if(localStorage.token){
    setAuthToken(localStorage.token);
}
  try{
       
       const res =await axios.get(baseURL+'/api/profile/userofemployee');
       dispatch({
           type:GET_USEROFEMPLOYEE,
           payload:res.data
       })

  }catch(err){
  
   dispatch({
       type:USEROFEMPLOYEE_ERROR,
       payload:{ msg: 'load sub user reeor', status: '500' }
    })

     
  }
}



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


