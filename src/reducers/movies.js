// @flow
import Immutable from 'seamless-immutable';
import _ from 'lodash';
import {
  SELECT_USER_TYPE,
 
} from '../actions/ActionTypes';

const initialState = Immutable({
  data: 'user',

  access_token: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_USER_TYPE: {
      return Immutable.merge(state, {
        data: action.payload,
      });
    }

    default:
      return state;
  }
};
