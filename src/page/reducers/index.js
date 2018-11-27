/**
 * Create by chengkai on 2018/11/27.
 * Describe:
 */

import { pageActionType } from '../actions';

export const pageReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case pageActionType.deleteUser:
    case pageActionType.updateUser:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};