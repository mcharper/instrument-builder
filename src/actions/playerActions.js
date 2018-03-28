import * as types from './actionTypes';
import * as synth from "../components/Synth.js";

export function adjustPlayback(json) {
    return dispatch => {
        dispatch(restartSynth(json));
    };
}

export const restartSynth = (json) => {
  return {
    type: types.ADJUST_PLAYBACK,
    player: json
  };
}