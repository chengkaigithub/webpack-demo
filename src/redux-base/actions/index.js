/**
 * Create by chengkai on 2018/11/27.
 * Describe:
 */

export const ACTION_TYPE = {
  UPDATE_USER: 'UPDATE_USER'
};

export const updateUser = (dispatch, data) => dispatch({
  type: ACTION_TYPE.UPDATE_USER,
  payload: data
});

