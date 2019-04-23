import initialState from './initialState';
import {
  DATA_FETCH,
  DATA_RECEIVE,
} from '../actions/actionTypes';

export default function data(state = initialState.data, action) {
  let newState;
  switch (action.type) {
    case DATA_FETCH:
      console.log('DATA_FETCH Action');
      return action;
    case DATA_RECEIVE:
      console.log('DATA_RECEIVE Action');
      console.log(action);
      newState = action.data;
      return newState;
    default:
      return state;
  }
}
