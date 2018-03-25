import initialState from './initialState';
import {RECEIVE_PARAMETERS} from '../actions/actionTypes';

export default function parameters(state = initialState.parameters, action) {
  let newState;
  
  switch (action.type) {
    case RECEIVE_PARAMETERS:
      console.log(JSON.stringify(action));
      newState =  { 
         attack: action.parameters.attack || state.attack,
         decay: action.parameters.decay || state.decay,
         sustain: action.parameters.sustain || state.sustain,
         release: action.parameters.release || state.release
      };
      
      return newState;

    default:
      return state;
  }
}
