// @flow
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const CANCEL = 'CANCEL';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE, CANCEL].forEach(type => {
    res[type] = `${base}_${type}`;
  });
  return res;
}
export const USER_SIGNIN = createRequestTypes('USER_SIGNIN');

export const NETWORK_INFO = 'NETWORK_INFO';

// start new service here

// Client Side Actions

export const EMPTY = createRequestTypes('EMPTY');
export const GET_MOVIES_LIST = createRequestTypes('GET_MOVIES_LIST');

