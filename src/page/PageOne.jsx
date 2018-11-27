/**
 * Create by chengkai on 2018/11/26.
 * Describe:
 */

import React, { Component } from 'react';
import './PageOne.scss';
import Loadable from "react-loadable";
import _ from 'lodash';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from "./mapping";

class PageOne extends Component {

  constructor(props) {
    super(props);
    // this.haha = this.haha.bind(this);
  }

  fetchData = (data) => {
    console.log('环境:', process.env.NODE_ENV);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error('Something went wrong when fetching this data: ', error));
  }

  clickJump = () => {
    this.props.history.push('/pageTwo');
  }

  clickImg = () => {
    this.fetchData();
    console.log(_.join(['main', 'print', '!'], ' '));
    Loadable({
      loader: () => import(/* webpackChunkName: "print" */ "../print"),
      loading: <div className="loadingStyle">加载中...</div>
    }).preload() // 预加载|主动加载, 重复调用只执行一次
      .then(target => target.default())
      .catch(e => console.error('Loadable 加载 Error:', e));
  };

  deleteUserInfo = () => {
    this.props.deleteUser();
  }

  updateUserInfo = () => {
    this.props.updateUser({ name: 'ck', age: '18', phone: '18586059608' });
  }

  printUserInfo = () => {
    console.log(this.props.globalInfo);
  }

  render() {
    return (
      <div className="containerStyle">
        <span>界面1</span>
        <div>react组件</div>
        <img src="/static/img/tc2.png" alt="" onClick={this.clickJump}/>
        {/* 图片需要压缩的话需要使用require 相对路径引入 */}
        <img src={require('../../static/img/merchant_auth.png')} alt="" onClick={this.clickImg}/>
        <button type="button" onClick={this.updateUserInfo}>更改user信息</button>
        <button type="button" onClick={this.deleteUserInfo}>删除user信息</button>
        <button type="button" onClick={this.printUserInfo}>打印user信息</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageOne);
