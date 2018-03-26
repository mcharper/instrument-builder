import * as types from './actionTypes';

export function tweakEnvelope(json) {
  return {type: types.TWEAK_ENVELOPE, envelope: json};
}
