import {combineReducers} from 'redux';
import synthType from './synthTypeReducer';
import oscillator from './oscillatorReducer';
import envelope from './envelopeReducer';
import player from './playerReducer';

const rootReducer = combineReducers({
  player,
  synthType,
  oscillator,
  envelope
});

export default rootReducer;