/**
 * Create by chengkai on 2018/11/27.
 * Describe:
 */

import { combineReducers } from 'redux';
import { ACTION_TYPE } from '../actions';
import { pageReducer } from '../../page/reducers';

// FIXME 测试action
const user = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPE.UPDATE_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// FIXME 缺少真实业务reducers
export default combineReducers({
  globalInfo: pageReducer,
});
