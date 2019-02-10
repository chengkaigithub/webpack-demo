/**
 * Create by chengkai on 2018/11/15.
 * Describe:
 */

import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux-base/store'
import Routers from './routers';
import './index.less';

if (module.hot) {
  module.hot.accept();
}

class Main extends React.Component {
  componentWillMount() {
    const baseWidth = 750;
    const customBenchmark = 100;
    const deviceWidth = document.documentElement.clientWidth;
    const adapterSize = customBenchmark * deviceWidth / baseWidth;
    document.documentElement.style.fontSize = adapterSize + 'px';
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routers/>
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById("root")
);