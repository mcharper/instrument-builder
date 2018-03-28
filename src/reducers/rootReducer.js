import {combineReducers} from 'redux';
import oscillator from './oscillatorReducer';
import envelope from './envelopeReducer';
import player from './playerReducer';

const rootReducer = combineReducers({
  oscillator,
  envelope,
  player
});

export default rootReducer;