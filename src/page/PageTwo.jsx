/**
 * Create by chengkai on 2018/11/26.
 * Describe:
 */

import React from 'react';
import styles from './PageTwo.scss';
import { SlideRuler } from "../components";
// import '../components/RulerSample';

export default class PageTwo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      money: 0,
      date: 0
    };
    this.handleMoneyValue = this.handleMoneyValue.bind(this);
    this.handleDateValue = this.handleDateValue.bind(this);
    this._renderSlideRuler = this._renderSlideRuler.bind(this);
    this._setSlideRulerRefMoney = this._setSlideRulerRefMoney.bind(this);
    this._setSlideRulerRefDate = this._setSlideRulerRefDate.bind(this);
  }

  componentDidMount() {
    this._renderSlideRuler();
  }

  handleMoneyValue(money) {
    this.setState({ money });
  }

  handleDateValue(date) {
    this.setState({ date });
  }

  _renderSlideRuler() {
    new SlideRuler(
      {
        el: this.slideRulerMoney,
        maxValue: 10 * 10000, // 最大值
        minValue: 0, // 最小值
        currentValue: 0, // 当前值
        handleValue: this.handleMoneyValue,
        precision: 2000, // 每一小格(每一步长)占据的数量
        canvasWidth: 300,
        canvasHeight: 83,
        heightDecimal: 35, // 长刻度线高度
        heightDigit: 18, // 小刻度 高度
        lineWidth: 2, // 刻度线宽度
        colorDecimal: '#E4E4E4', // 长刻度线颜色
        colorDigit: '#E4E4E4', // 短刻度线颜色
        divide: 10, // 刻度步长
        fontSize: 12, // 数字 字体大小
        fontColor: '#666666', // 数字 字体颜色
        smallScaleNum: 5, // 小刻度的个数
      }
    );
    new SlideRuler(
      {
        el: this.slideRulerDate,
        maxValue: 36, // 最大值
        minValue: 0, // 最小值
        currentValue: 0, // 当前值
        handleValue: this.handleDateValue,
        precision: 2, // 每一小格(每一步长)占据的数量
        canvasWidth: 300,
        canvasHeight: 83,
        heightDecimal: 35, // 长刻度线高度
        heightDigit: 18, // 小刻度 高度
        lineWidth: 2, // 刻度线宽度
        colorDecimal: '#E4E4E4', // 长刻度线颜色
        colorDigit: '#E4E4E4', // 短刻度线颜色
        divide: 10, // 刻度步长
        fontSize: 20, // 数字 字体大小
        fontColor: '#666666', // 数字 字体颜色
        smallScaleNum: 3
      }
    );
    // new Ruler({
    //   elem: '#ruler',
    //   width: document.getElementById('ruler').offsetWidth, //画布宽
    //   height: 50, // 画布高
    //   start: 0, // 最小值
    //   end: 10 * 10000, // 最大值
    //   capacity: 2000, // 每个刻度代表值
    //   value: 0, // 当前值
    //   unit: 10, // 刻度距离
    //   linecolor: '#f00', // 线颜色
    //   scaleplate: {},
    //   callback: (val) => { //刻度值改变时回调
    //     console.log('刻度值改变时回调:', val);
    //     document.querySelector('.value').innerHTML = val;
    //   }
    // });
  }

  _setSlideRulerRefMoney(ref) {
    this.slideRulerMoney = ref;
  }
  _setSlideRulerRefDate(ref) {
    this.slideRulerDate = ref;
  }

  render() {
    const { money, date } = this.state;
    return (
      <div className={styles.containerStyle}>
        <span>界面2</span>
        <div>
          <span>金额:</span>
          <span>{money}</span>
        </div>
        <div ref={this._setSlideRulerRefMoney}/>
        <div>
          <span>时间:</span>
          <span>{date}</span>
        </div>
        <div ref={this._setSlideRulerRefDate}/>

        <canvas id="ruler" className={styles.canvas}></canvas>
        <div className="value"></div>
      </div>
    )
  }
}