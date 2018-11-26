/**
 * Create by chengkai on 2018/11/26.
 * Describe:
 */

import React, { Component } from 'react';
import './PageOne.scss';
import './Page404.scss';
import '../main3.less';

export default class PageOne extends Component {

  componentDidMount() {
    console.log('this.props:', this.props);
  }

  render() {
    return (
      <div className="containerStyle">
        <span>404</span>
      </div>
    )
  }
}
