var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://127.0.0.1:3000',
        'webpack/hot/dev-server',
        './app/index'            // 入口文件
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.join(__dirname, 'app')
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader' // 添加对样式表的处理
            }
        ]
    }
};