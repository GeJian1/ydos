const path = require('path')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const isDev = process.env.NODE_ENV === 'development';
const AssetsPlugin = require('assets-webpack-plugin')

module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    terminal: {
      // page 的入口
      entry: 'src/main.js',
      chunks: ['chunk-vendors', 'chunk-common', 'home']
    }
  },
  devServer: {
    compress: true,
    noInfo: true,
    quiet: false,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 1998,
  },
  publicPath:isDev ? 'http://localhost:1998':'/',
  chainWebpack:webpackConfig =>{
    webpackConfig
      .plugin('assets')
      .use(AssetsPlugin, [{
        filename: 'webpack.assets.json', // 输出文件名
        path: path.join(__dirname,'./dist'), // 输出目录
        processOutput: function (assets) {
          return JSON.stringify(assets); // 输出内容
        }
      }])
      .init((Plugin, args) => new Plugin(...args));
  }
}
