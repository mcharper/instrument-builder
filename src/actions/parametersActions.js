import * as types from './actionTypes';

export function receiveParameters(json) {
  return {type: types.RECEIVE_PARAMETERS, parameters: json};
}
