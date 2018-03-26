import initialState from './initialState';
import {TWEAK_OSCILLATOR} from '../actions/actionTypes';

export default function oscillator(state = initialState.oscillator, action) {
  let newState;
  
  switch (action.type) {
    case TWEAK_OSCILLATOR:
      newState =  { 
         type: action.oscillator.type || state.type,
         frequency: action.oscillator.frequency || state.frequency,
         detune: action.oscillator.detune || state.detune,
         phase: action.oscillator.phase || state.phase,
         partials: action.oscillator.partials || state.partials
      };
      
      return newState;

    default:
      return state;
  }
}
