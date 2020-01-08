import axios  from 'axios';
import {setAlert} from './alert';
import {
 REGISTER_SUCCUSS,
 REGISTER_FAIL,
 USER_LOADED,
 AUTH_ERROR,
 LOGIN_SUCCESS,
 LOGIN_FAIL,
 LOG_OUT,
 CLEAR_PROFILE,
}  from './types';
import setAuthToken  from '../utils/setAuthToken';

//load user 
const baseURL = 'http://localhost:5000';

export const loadUser= ()=> async dispatch=>{
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
    try{
         //console.log('zzz'); return true;
         const res =await axios.get(baseURL+'/api/auth');
         const result_auth=res.data;
         

         dispatch({
             type:USER_LOADED,
             payload:res.data
         })

    }catch(err){

        dispatch({
            type:AUTH_ERROR
            
        })
    }
}



//register user

export const register =({name,email,password})=>async dispatch=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body=JSON.stringify({name,email,password});
    var  res='';
    try{
      res =await axios.post(baseURL+'/api/users/register',body,config);
            
      dispatch(setAlert('user created','primary'));
      dispatch({
               type:REGISTER_SUCCUSS,
               payload:res.data 
            })

    }catch(err){

         const errors=err.response.data.errors;
         if(errors){
                errors.forEach(error => dispatch(setAlert(error.msg,'danger')));
         }
        dispatch({
            type:REGISTER_FAIL,
            payload:res.data 
         })
         dispatch(loadUser());

    }
}


//login user

export const login =({email,password})=>async dispatch=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body=JSON.stringify({email,password});
    var  res='';
    try{
      res =await axios.post(baseURL+'/api/users/login',body,config);
          //console.log(res.data.token);  
     // dispatch(setAlert('user login','primary'));
    // const { token } = res.data.token;
      // Set token to ls
      //localStorage.setItem('token', token);
      dispatch({
               type:LOGIN_SUCCESS,
               payload:res.data 
            });

            dispatch(loadUser());

    }catch(err){

         const errors=err.response.data.errors;
         if(errors){
                errors.forEach(error => dispatch(setAlert(error.msg,'danger')));
         }
        dispatch({
            type:LOGIN_FAIL,
            payload:res.data 
         })

    }
}

//user logout cleare profile

export const logout = () => dispatch => {
    dispatch({ type:CLEAR_PROFILE});
    dispatch({ type:LOG_OUT});
    
}