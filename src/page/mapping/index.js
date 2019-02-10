/**
 * Create by chengkai on 2018/11/27.
 * Describe:
 */

import { deleteUser, updateUser } from '../actions';

export const mapStateToProps = state => {
  return { globalInfo: state.globalInfo }
};

export const mapDispatchToProps = dispatch => ({
  updateUser: data => updateUser(dispatch, data),
  deleteUser: () => deleteUser(dispatch)
});
