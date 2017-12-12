const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./base')
const root = path.resolve(__dirname, '..')

const glob = require("glob");
//入口使用通配符
const viewFiles = glob.sync("./src/views/**/*.vue")
const com1 = glob.sync("./src/components/**/*.vue")
const com2 = glob.sync("./src/components2/**/*.vue")
const main = ['./src/app.vue','./src/router.js','./src/main.js']


module.exports = merge(baseConfig, {
    entry: {
        "vendor": [ "vue"],
        "com1": com1,
        "com2": com2,
        "view": viewFiles,
        "main": main
    },
    output: {
        path: path.join(root, 'build'),
        filename: '[name].dll.js',
        library: '[name]',
    },
    plugins: [
        new webpack.DllPlugin({
            path: './build/[name]-manifest.json',
            name: '[name]',
            context: __dirname,
        }),
    ],
});