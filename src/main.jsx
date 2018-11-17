/**
 * Create by chengkai on 2018/11/15.
 * Describe:
 */

import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './main.css';

class Main extends React.Component {

  componentDidMount() {
    console.log(_.join(['print', 'print', 'print!'], ' '));
  }

  render() {
    return (
      <div style={styles.containerStyle}>
        <div>react组件</div>
        <img src='../static/img/tc1.png' alt=""/>
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