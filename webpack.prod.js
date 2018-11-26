const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    app: [path.resolve(__dirname, './src/main.jsx')],
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new UglifyJSPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:5].css',
      chunkFilename: "[id].[hash:5].css"
    }),
    new webpack.HashedModuleIdsPlugin(), // 未修改的模块儿保持名称不变
  ],
  module: {
    rules: [
      {
        test: /\.(le|sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
          'sass-loader'
        ]
      }
    ]
  }
});