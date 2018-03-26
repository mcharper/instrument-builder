import {combineReducers} from 'redux';
import envelope from './envelopeReducer';
import oscillator from './oscillatorReducer';

const rootReducer = combineReducers({
  envelope,
  oscillator
});

export default rootReducer;