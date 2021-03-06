import initialState from './initialState';
import {ADJUST_PLAYBACK} from '../actions/actionTypes';

export default function player(state = initialState.player, action) {
  let newState;
  
  switch (action.type) {
    case ADJUST_PLAYBACK:
      newState =  { 
         playing: action.player.playing,
         volume: action.player.volume || state.volume,
         bpm: action.player.bpm || state.bpm
      };
      
      return newState;

    default:
      return state;
  }
}
