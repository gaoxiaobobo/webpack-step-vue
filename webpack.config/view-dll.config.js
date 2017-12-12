const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./base')
const root = path.resolve(__dirname, '..')

const glob = require("glob");
//入口使用通配符
const viewFiles = glob.sync("./src/views/**/*.vue")

module.exports = merge(baseConfig, {
  output: {
      path: path.join(root, 'build'),
      filename: '[name].dll.js',
      library: '[name]',
  },
  entry: {
      "view": viewFiles
  },
  plugins: [
      new webpack.DllPlugin({
          path: './build/[name]-manifest.json',
          name: '[name]',
          context: __dirname,
      }),
  ],
})