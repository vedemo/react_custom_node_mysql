import {
  CREATE_USEROFEMPLOYEE,
  CREATE_USEROFEMPLOYEE_ERROR
 
   
  } from '../actions/types';
  
  const initialState = {
    createmployee:null,
    isCreated: false,
    error: {}
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_USEROFEMPLOYEE:
        return {
          ...state,
          createmployee: payload,
          isCreated: true
        };
          case CREATE_USEROFEMPLOYEE_ERROR:
            return {
              ...state,
              error: payload,
              isCreated: false
            };
      default:
        return state;
    }
  }