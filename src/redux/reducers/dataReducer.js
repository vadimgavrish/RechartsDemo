import initialState from './initialState';
import {
  DATA_FETCH,
  DATA_RECEIVE,
} from '../actions/actionTypes';

export default function data(state = initialState.data, action) {
  let newState;
  switch (action.type) {
    case DATA_FETCH:
      return action;
    case DATA_RECEIVE:
      newState = action.data;
      return newState;
    default:
      return state;
  }
}
