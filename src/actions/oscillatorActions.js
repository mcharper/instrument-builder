import * as types from './actionTypes';

export function tweakOscillator(json) {
  return {type: types.TWEAK_OSCILLATOR, oscillator: json};
}
