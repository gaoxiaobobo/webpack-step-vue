const path = require('path');
const root = path.resolve(__dirname, '..') // 项目的根目录绝对路径
const webpack = require('webpack');
const glob = require("glob");

//入口使用通配符
const vueFiles = glob.sync("./src/components/**/*.vue")

console.log(vueFiles)


module.exports = {
    resolve: {
        extensions: [".vue",'.js']
    },
    module: { // 配置loader
            loaders: [
          {test: /\.vue$/, loader: 'vue-loader'}, // 所有.vue结尾的文件，使用vue-loader
          {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/} // .js文件使用babel-loader，切记排除node_modules目录
        ]
    },
    output: {
        path: path.join(root, 'build'),
        filename: '[name].dll.js',
        library: '[name]',
    },
    entry: {
        "com1": vueFiles
    },
    plugins: [
        new webpack.DllPlugin({
            path: './build/[name]-manifest.json',
            name: '[name]',
            context: __dirname,
        }),
    ],
};