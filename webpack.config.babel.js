/**
 * Create by chengkai on 2019/6/23.
 * Describe:
 */
import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// const autoprefixer = require('autoprefixer');
// const eslintFriendlyFormatter = require('eslint-friendly-formatter');

export default {
  entry: {
    main: process.env.mode === 'production'
      ? [path.resolve(__dirname, './src/main.jsx')]
      : [path.resolve(__dirname, './src/main.jsx'), 'webpack-hot-middleware/client'],
    vendor: ['babel-polyfill', 'react', 'react-dom', 'whatwg-fetch', 'core-js']
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'public/client.bundle.[hash:8].js',
    chunkFilename: 'public/[name].[chunkhash:8].js',
    sourceMapFilename: '[file].map',
    publicPath: '/'
  },
  devtool: process.env.mode === 'production' ? '' : 'source-map',
  target: 'web',
  watch: process.env.mode !== 'production',
  cache: process.env.mode !== 'production',
  mode: process.env.mode,
  module: {
    unsafeCache: process.env.mode !== 'production',
    rules: [
      {
        test: /\.(jsx|js)?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: true
        }
      }, {
        test: /\.scss?$/,
        use: [
          'style-loader', // creates style nodes from JS strings,
          'css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:8]', // translates CSS into CommonJS
          'postcss-loader',
          'sass-loader' // compiles Sass to CSS
        ],
        exclude: /node_modules[\\/](?!(antd-mobile)[\\/]).*/
      }, {
        test: /\.css?$/,
        use: [
          'style-loader', // creates style nodes from JS strings,
          'postcss-loader'
        ]
      }, {
        test: /\.less?$/,
        use: [
          'style-loader', // creates style nodes from JS strings,
          'postcss-loader',
          { loader: 'less-loader', options: { javascriptEnabled: true } }
        ]
      },
      { test: /\.(png|jpg|svg|gif)$/, loader: 'url-loader?limit=25000&name=public/[name][hash:8].[ext]' }, // 指定图片路径
      { test: /\.(woff|ttf|eot|woff2)$/, loader: 'url-loader?limit=100000' },
      { test: /\.(md|markdown)$/, use: ['html-loader', 'markdown-loader'] }
    ]
  },
  externals: {
    fastclick: 'FastClick',
    crypto: 'CryptoJS',
    zepto: '$'
  },
  resolve: {
    extensions: ['.web.js', '.js', '.jsx', '.scss', '.less', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['main', 'vendor', 'runtime~main'],
      filename: 'index.html',
      template: './index.html',
      title: '加载中',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    // new BundleAnalyzerPlugin(),
    new CopyWebpackPlugin(
      [{ from: './static', to: './static' }],
      { copyUnmodified: true }
    ),

    process.env.mode !== 'production' ? new webpack.HotModuleReplacementPlugin() : () => {
    }
  ],
  optimization: {
    nodeEnv: process.env.mode,
    noEmitOnErrors: true,
    runtimeChunk: true,
    removeAvailableModules: true,
    splitChunks: {
      name: () => {
      }, // 名称，此选项可接收 function
      cacheGroups: { // 这里开始设置缓存的 chunks
        vendor: { // key 为entry中定义的 入口名称
          chunks: 'initial', // 必须三选一： "initial" | "all" | "async"(默认就是异步)
          test: /react|whatwg-fetch|react-dom|babel-polyfill|core-js/, // 正则规则验证，如果符合就提取 chunk
          name: 'vendor' // 要缓存的 分隔出来的 chunk 名称
        }
      }
    }
  }
};
