/**
 * Create by chengkai on 2018/11/15.
 * Describe:
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from "react-loadable";
import _ from 'lodash';
import './main.css';

class Main extends React.Component {

  // componentDidMount() {
  // import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
  //   console.log(_.join(['lodash', 'loaded', 'finish'], '->'));
  // }).catch(error => 'An error occurred while loading the component');
  // }

  clickImg = () => {
    // import(/* webpackChunkName: "print" */ './print').then(module => {
    //   var print = module.default;
    //   print();
    // });
    _.join(['main', 'print', '!'], ' ')
    Loadable({
      loader: () => import(/* webpackChunkName: "print" */ "./print"),
      loading: <div style={{ width: '200px', height: '200px', backgroundColor: 'pink' }}>加载中...</div>
    }).preload() // 预加载|主动加载, 重复调用只执行一次
      .then(target => target.default())
      .catch(e => console.error('Loadable 加载 Error:', e));
  };

  render() {
    return (
      <div style={styles.containerStyle}>
        <div>react组件</div>
        <img src="/static/img/tc2.png" alt=""/>
        {/* 图片需要压缩的话需要使用require 相对路径引入 */}
        <img src={require('../static/img/merchant_auth.png')} alt="" onClick={this.clickImg}/>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Main/>,
  document.getElementById("container")
);