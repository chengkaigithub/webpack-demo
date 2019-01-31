/**
 * Create by chengkai on 2018/11/26.
 * Describe:
 */

import React from 'react';
import './PageOne.scss';
import { SlideRuler } from "../components";

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
        minValue: 1, // 最小值
        currentValue: 1, // 当前值
        handleValue: this.handleDateValue,
        precision: 1, // 每一小格(每一步长)占据的数量
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
        smallScaleNum: 6
      }
    );
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
      <div className="containerStyle">
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
      </div>
    )
  }
}