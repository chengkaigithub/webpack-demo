/**
 * Create by chengkai on 2018/11/14.
 * Describe:
 */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware");

const app = express();
// const config = require('../webpack.config.js');
const config = require('../webpack.dev');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300
  }
}));

// 设置静态资源目录
app.use('/static', express.static(path.join(__dirname, '../static')));

app.use(webpackHotMiddleware(compiler, {
  heartbeat: 2000
}));

// 测试无效,开发环境需要在html里面写mate脚本.
// app.all('*', function (req, res, next) {
//   res.header('Content-Security-Policy', "default-src 'self';script-src 'self' https://cdn.staticfile.org 'nonce-EDNnf03nceIOfn39fn3e9h3sdfa';style-src 'self' 'unsafe-inline';connect-src 'self' https://jsonplaceholder.typicode.com;");
//   next();
// });

// Serve the files on port 3000.
app.listen(3900, function () {
  console.log('Example app listening on port 3900!\n');
});