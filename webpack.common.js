const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const imageMinPngQuant = require("imagemin-pngquant");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const InsertCustomScriptPlugin = require('./InsertCustomScriptPlugin');
const htmlWebpackPluginConfig = require('./config')(true);

// Ignore all deprecations and hope that nothing will silently break in the future.
// process.noDeprecation = true;

module.exports = {
  entry: {
    polyfills: [path.resolve(__dirname, './src/polyfills.js')],
  },
  plugins: [
    new HtmlWebpackPlugin(htmlWebpackPluginConfig),
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // name: "[path][name]-[hash:5].min.[ext]",
              name: "[path][name].[ext]",
              limit: 1, // size <= 1KB
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
        use: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.less', '.css']
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
