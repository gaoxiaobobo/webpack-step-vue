const path = require('path');
const root = path.resolve(__dirname, '..') // 项目的根目录绝对路径
const webpack = require('webpack');


module.exports = {
    resolve: {
        extensions: [".vue", '.js']
    },
    module: { // 配置loader
        loaders: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            }, // 所有.vue结尾的文件，使用vue-loader
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            } // .js文件使用babel-loader，切记排除node_modules目录
        ]
    },
    entry: {
        "vendor": [ "vue"],
        "com1": ["./src/components/all"],
        "com2": ["./src/components2/all"]
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
};