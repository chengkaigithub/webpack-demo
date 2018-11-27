/**
 * Create by chengkai on 2018/11/27.
 * Describe:
 */

import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';

export default createStore(reducers);