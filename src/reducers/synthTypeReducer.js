import initialState from './initialState';
import {CHANGE_SYNTH_TYPE} from '../actions/actionTypes';

export default function synthType(state = initialState.synthType, action) {
  let newState;
  
  switch (action.type) {
    case CHANGE_SYNTH_TYPE:
      console.log("Change synth type to " + action.synthType.type);
      newState =  { 
         type: action.synthType.type || synthType.type
      };
      
      return newState;

    default:
      return state;
  }
}
