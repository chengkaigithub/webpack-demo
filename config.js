/**
 * Create by chengkai on 2018/11/22.
 * Describe: HtmlWebpackPlugin配置文件
 */

module.exports = (product) => ({
  meta: product ? {} : {
    'Content-Security-Policy': {
      'http-equiv': 'Content-Security-Policy',
      'content': "default-src 'self';script-src 'self' https://cdn.staticfile.org 'nonce-EDNnf03nceIOfn39fn3e9h3sdfa';style-src 'self' 'unsafe-inline';connect-src 'self' https://jsonplaceholder.typicode.com;"
    }
  },
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
});