// @flow

import {
  GET_MOVIES_LIST
} from './ActionTypes';

export function getMoviesList(responseCallback) {
  return {
    responseCallback,
    type: GET_MOVIES_LIST.REQUEST,
  };
}
