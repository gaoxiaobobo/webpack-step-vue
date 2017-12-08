const path = require('path');
const root = path.resolve(__dirname, '..') // 项目的根目录绝对路径
const webpack = require('webpack');

const vendors = [
    path.join(root, 'src/components2/all'),
    // 'src/components/all',
    // ...其它库
];

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
        "com2": vendors, //key is [name],不要使用连字符 -,. 否则会解析成属性
    },
    plugins: [
        new webpack.DllPlugin({
            path: './build/[name]-manifest.json',
            name: '[name]',
            context: __dirname,
        }),
    ],
};