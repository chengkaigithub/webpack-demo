/**
 * Create by chengkai on 2018/11/15.
 * Describe:
 */
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPluginConfig = require('./config')(false);
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    app: [
      path.resolve(__dirname, '../src/main.jsx'),
      'webpack-hot-middleware/client' // release need delete : 'webpack-hot-middleware/client'
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin(htmlWebpackPluginConfig),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('development')
    // })
  ],
  module: {
    rules: [
      {
        test: /\.(c|sc|sa)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(c|le)ss$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  }
});