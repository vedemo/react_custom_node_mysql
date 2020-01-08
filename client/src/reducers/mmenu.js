import {SHOWM_MENU } from '../actions/types';

const initialState={
    menu:false,
   
}
export default function(state=initialState,action){
    console.log('reducer for menu'+action);
    const {type,payload}=action;
    switch(type){
            case SHOWM_MENU:
                    return{
                        ...state,
                        menu:!payload,
                    }
       
       
        default:
            return state;
    }

}