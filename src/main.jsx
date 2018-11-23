/**
 * Create by chengkai on 2018/11/15.
 * Describe:
 */

import React from "react";
import ReactDOM from 'react-dom';
import Loadable from "react-loadable";
import _ from 'lodash';
import './main3.less';

class Main extends React.Component {

  // componentDidMount() {
  // import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
  //   console.log(_.join(['lodash', 'loaded', 'finish'], '->'));
  // }).catch(error => 'An error occurred while loading the component');
  // }

  fetchData = () => {
    console.log('环境:', process.env.NODE_ENV);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error('Something went wrong when fetching this data: ', error));
  }

  clickImg = () => {
    this.fetchData();
    // import(/* webpackChunkName: "print" */ './print').then(module => {
    //   var print = module.default;
    //   print();
    // });
    console.log(_.join(['main', 'print', '!'], ' '));
    Loadable({
      loader: () => import(/* webpackChunkName: "print" */ "./print"),
      loading: <div className="loadingStyle">加载中...</div>
    }).preload() // 预加载|主动加载, 重复调用只执行一次
      .then(target => target.default())
      .catch(e => console.error('Loadable 加载 Error:', e));
  };

  render() {
    return (
      <div className="containerStyle">
        <div>react组件</div>
        <img src="/static/img/tc2.png" alt=""/>
        {/* 图片需要压缩的话需要使用require 相对路径引入 */}
        <img src={require('../static/img/merchant_auth.png')} alt="" onClick={this.clickImg}/>
      </div>
    );
  }
}

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Main/>,
  document.getElementById("container")
);