const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const baseConfig = require('./base')
const root = path.resolve(__dirname, '..')

module.exports = merge(baseConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(root, 'index.html'), // 模板文件
      inject: 'body' // js的script注入到body底部
    }),
    new webpack.DllReferencePlugin({
      manifest: require('../build/vendor-manifest.json'),
      context: __dirname
    }),
    new webpack.DllReferencePlugin({
      manifest: require('../build/com1-manifest.json'),
      context: __dirname
    }),
    new webpack.DllReferencePlugin({
      manifest: require('../build/com2-manifest.json'),
      context: __dirname
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname,"../build/vendor.dll.js"),
      includeSourcemap: false  //如果没有用hash值就选false
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname,"../build/com1.dll.js"),
      includeSourcemap: false  //如果没有用hash值就选false
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname,"../build/com2.dll.js"),
      includeSourcemap: false  //如果没有用hash值就选false
    }),
  ]
})