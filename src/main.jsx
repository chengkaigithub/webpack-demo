/**
 * Create by chengkai on 2018/11/15.
 * Describe:
 */

import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Routers from './routers';
import './main.less';

if (module.hot) {
  module.hot.accept();
}

class Main extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Routers/>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById("container")
);