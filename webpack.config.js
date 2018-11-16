const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: [
      path.resolve(__dirname, './src/index.js'),
      'webpack-hot-middleware/client' // release need delete : 'webpack-hot-middleware/client'
    ],
    // print: ['./src/print.js', 'webpack-hot-middleware/client']
  },
  devtool: 'source-map', // 开发环境使用,生产是用none
  // devServer: {
  //   contentBase: './build',
  //   hot: true
  // },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      filename: 'index.html',
      // template: path.join(__dirname, 'index.html'),
      template: 'index.html',
      inject: true,
      hash: true,
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: true,
        minifyJS: true, // ?需要插件支持?
        minifyCSS: true, // ?需要插件支持?
        minifyURLs: true, // ?需要插件支持?
      },
      // cache: true,
      chunks: ['app', 'print'],
      chunksSortMode: 'dependency',
      mobile: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'url-loader?limit=1024&name=[path][name].[ext]' // limit 小于此限制的图片转为base64
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=50000&name=[path][name].[ext]' // limit at 50k. Above that it emits separate files
      }
    ]
  }
};
