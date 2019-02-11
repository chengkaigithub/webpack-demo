/**
 * Create by chengkai on 2018/11/26.
 * Describe:
 */

import React, { Component } from 'react';
import styles from './Page404.scss';

export default class PageOne extends Component {

  componentDidMount() {
    console.log('this.props:', this.props);
  }

  render() {
    return (
      <div className={styles.containerStyle}>
        <span>404</span>
      </div>
    )
  }
}
