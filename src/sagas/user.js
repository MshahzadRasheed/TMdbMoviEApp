import {take, put, call, fork} from 'redux-saga/effects';
import {GET_MOVIES_LIST} from '../actions/ActionTypes';
import {SAGA_ALERT_TIMEOUT} from '../constants';
import {
getMoviesList
} from '../actions/UserActions';
import {GET_MOVIES_LIST as GET_MOVIES_LIST_URL, callRequest} from '../config/WebService';
import ApiSauce from '../services/ApiSauce';
import Util from '../util';
import DataHandler from '../services/DataHandler';

function alert(message, type = 'error') {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}

function* moviesList() {
  while (true) {
    const {responseCallback} = yield take(GET_MOVIES_LIST.REQUEST);
    try {
      const response = yield call(
        callRequest,
        GET_MOVIES_LIST_URL,
        {},
        '',
        {},
        ApiSauce,
      );
        if (responseCallback) responseCallback(response.results, response.results);
       // yield put(termsSuccess(response.success.content));
      
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(Util.getErrorText(err.message));
    }
  }
}

export default function* root() {
  yield fork(moviesList);
}
