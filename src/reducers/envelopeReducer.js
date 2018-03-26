import initialState from './initialState';
import {TWEAK_ENVELOPE} from '../actions/actionTypes';

export default function envelope(state = initialState.envelope, action) {
  let newState;
  
  switch (action.type) {
    case TWEAK_ENVELOPE:
      newState =  { 
         attack: action.envelope.attack || state.attack,
         decay: action.envelope.decay || state.decay,
         sustain: action.envelope.sustain || state.sustain,
         release: action.envelope.release || state.release
      };
      
      return newState;

    default:
      return state;
  }
}
