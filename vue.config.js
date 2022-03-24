// const { name } = require('./package.json')
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  css:{
    extract: false
  },
  publicPath: './',
  chainWebpack: config => {
    config.resolve.symlinks(false)
    config.resolve.alias
      .set('@', resolve('src'))
  },
  // configureWebpack: {
  //   entry: './src/zhima/index.js',
  //   output: {
      // 把子应用打包成 umd 库格式
      // path: path.resolve(__dirname, '../dist'),
      // publicPath: '/dist/',
      // library: 'bus',
      // libraryTarget: 'umd',
      // jsonpFunction: `webpackJsonp_n${name}`
    // }
  // }
}
