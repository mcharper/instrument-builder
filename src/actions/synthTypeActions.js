import * as types from './actionTypes';

export function changeSynthType(json) {
  return {type: types.CHANGE_SYNTH_TYPE, synthType: json};
}
