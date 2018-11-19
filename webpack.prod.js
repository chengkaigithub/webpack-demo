const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 创建多个实例
// const extractCSS = new ExtractTextPlugin({
//   filename: 'stylesheets/[name][hash].css',
//   allChunks: false
// });
// const extractLESS = new ExtractTextPlugin({
//   filename: 'stylesheets/[name][hash].less.css',
//   allChunks: false
// });

const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'production',
  entry: {
    app: [path.resolve(__dirname, './src/main.jsx')],
    // another: path.resolve(__dirname, './src/another-module.js'),
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash].css',
      allChunks: false,
    }),
    // extractCSS,
    // extractLESS
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      // {
      //   test: /\.css$/,
      //   use: extractCSS.extract(['css-loader', 'postcss-loader'])
      // },
      // {
      //   test: /\.less$/i,
      //   use: extractLESS.extract(['css-loader', 'less-loader'])
      // },
    ]
  }
});