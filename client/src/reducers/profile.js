import {
    GET_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILE,
    GET_USEROFEMPLOYEE,
    USEROFEMPLOYEE_ERROR
   
  } from '../actions/types';
  
  const initialState = {
    profile: null,
    userofemployee:null,
    loading: true,
    error: {}
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_PROFILE:
        return {
          ...state,
          profile: payload,
          loading: false
        };
      
        case GET_USEROFEMPLOYEE:
          return {
            ...state,
            userofemployee: payload,
            loading: false
          };

          case USEROFEMPLOYEE_ERROR:
            return {
              ...state,
              error: payload,
              loading: false
            };
  

      case PROFILE_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
        case CLEAR_PROFILE:
        return {
          ...state,
          profile: null,
          loading: false
        };
      
      default:
        return state;
    }
  }