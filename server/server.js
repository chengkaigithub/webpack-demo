/**
 * Create by chengkai on 2018/11/14.
 * Describe:
 */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require("webpack-hot-middleware");

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
//   // A function used to log lines, pass false to disable. Defaults to console.log
//   // log: false,
//   // The path which the middleware will serve the event stream on, must match the client setting
//   // path: "/__what",
//   // How often to send heartbeat updates to the client to keep the connection alive.
//   // Should be less than the client's timeout setting - usually set to half its value.
//   // reload: true,
//   // dynamicPublicPath: config.output.publicPath,
//   // path: "/__what",
//   path: '/__webpack_hmr',
  heartbeat: 2000
}));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});