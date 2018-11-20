const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const imageMinPngQuant = require("imagemin-pngquant");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const InsertCustomScriptPlugin = require('./InsertCustomScriptPlugin');

module.exports = {
  entry: {
    polyfills: [path.resolve(__dirname, './src/polyfills.js')],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HtmlWebpackPlugin',
      // filename: 'index.html',
      template: 'index.html',
      inject: true,
      // hash: true, // query 参数拼接hash值
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: true,
        minifyJS: true, // ?需要插件支持?
        minifyCSS: true, // ?需要插件支持?
        minifyURLs: true, // ?需要插件支持?
      },
      cache: true,
      chunks: ['app', 'vendor', 'polyfills'],
      chunksSortMode: 'dependency',
      mobile: true
    }),
    new CopyWebpackPlugin(
      [{ from: './static', to: './static', force: false }]
    ),
    new InsertCustomScriptPlugin({ chunkNames: ['polyfills'] })
  ],
  output: {
    filename: '[name].[hash:5].bundle.js',
    chunkFilename: '[name].[chunkhash:5].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    rules: [
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/,
      //   loader: 'url-loader?limit=1024&name=[path][name]-[hash:5].min.[ext]', // limit 小于此限制的图片转为base64
      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // name: "[path][name]-[hash:5].min.[ext]",
              name: "[path][name].[ext]",
              limit: 1000, // size <= 1KB
            }
          },
          // img-loader for zip img
          {
            loader: "img-loader",
            options: {
              plugins: [
                imageMinPngQuant({
                  quality: "80" // the quality of zip
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=50000&name=[path][name].[ext]' // limit at 50k. Above that it emits separate files
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // options: { "babelrc": true } // default option
        }
      },
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendor",
          chunks: "initial",
          test: /lodash/,
        }
      }
    }
  }
};
