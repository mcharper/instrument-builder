import initialState from './initialState';
import {RECEIVE_PARAMETERS} from '../actions/actionTypes';

export default function parameters(state = initialState.parameters, action) {
  let newState;
  switch (action.type) {
    case RECEIVE_PARAMETERS:
      let newValue = action.parameters.test * 2;
      newState = { test: newValue };
      console.log('RECEIVE_PARAMETERS Action')
      return newState;
    default:
      return state;
  }
}
