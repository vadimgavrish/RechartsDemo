import * as types from './actionTypes';

export function dataRecieve(json) {
  return {
    type: types.DATA_RECEIVE,
    data: json.historical
  };
}

export function dataFetch(ticker) {
  return dispatch => {
    return fetch(`https://financialmodelingprep.com/api/company/historical-price/${ticker}?serietype=line&datatype=json`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => dispatch(dataRecieve(res)))
    .catch(err => console.error(err));
  };
}
