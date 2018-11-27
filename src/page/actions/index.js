/**
 * Create by chengkai on 2018/11/27.
 * Describe:
 */

const actionCreatorNoParams = (dispatch, action) => dispatch(action());
const actionCreatorWithParams = (dispatch, action, data) => dispatch(action(data));

export const pageActionType = { updateUser: 'updateUser', deleteUser: 'deleteUser' };

const updateUserAction = data => ({ type: pageActionType.updateUser, payload: data });
const deleteUserAction = () => ({ type: pageActionType.deleteUser, payload: {} });

export const updateUser = (dispatch, data) => actionCreatorWithParams(dispatch, updateUserAction, data);
export const deleteUser = (dispatch) => actionCreatorNoParams(dispatch, deleteUserAction);