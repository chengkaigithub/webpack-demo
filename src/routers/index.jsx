/**
 * Create by chengkai on 2018/11/26.
 * Describe:
 */

import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import { Loading } from '../components'

export default () => (
  <Switch>
    <Route path="/pageOne" component={Loadable({ loader: () => import(/* webpackChunkName: "PageOne" */ "../page/PageOne"), loading: Loading })}/>
    <Route path="/pageTwo" component={Loadable({ loader: () => import(/* webpackChunkName: "PageTwo" */ "../page/PageTwo"), loading: Loading })}/>
    <Route path="/pageThree" component={Loadable({ loader: () => import(/* webpackChunkName: "PageThree" */ "../page/PageThree"), loading: Loading })}/>
    <Route exact component={Loadable({ loader: () => import(/* webpackChunkName: "PageThree" */ "../page/Page404"), loading: Loading })}/>
  </Switch>
);
