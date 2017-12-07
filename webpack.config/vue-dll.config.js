const path = require('path');
const root = path.resolve(__dirname, '..') // 项目的根目录绝对路径
const webpack = require('webpack');

const vendors = [
    'vue',
    // ...其它库
];

module.exports = {
    output: {
        path: path.join(root, 'build'),
        filename: '[name].dll.js',
        library: '[name]',
    },
    entry: {
        "vendor": vendors,//key is [name],不要使用连字符 -,. 否则会解析成属性
    },
    plugins: [
        new webpack.DllPlugin({
            path: './build/[name]-manifest.json',
            name: '[name]',
            context: __dirname,
        }),
    ],
};

